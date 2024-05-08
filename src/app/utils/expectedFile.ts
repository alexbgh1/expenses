import { resolveEmojiCategory } from "../utils/resolveEmojiCategory";

import { FILE_HEADERS, MAX_COLS, DESCRIPTION_MAX_LENGTH, CATEGORY_MAX_LENGTH } from "../constants/file";

import { Category, FileHeader, Transaction } from "../types";

const checkHeaders = (headers: string[]): boolean => {
  const expectedHeaders = FILE_HEADERS;
  return headers.every((header, index) => header.toLowerCase() === expectedHeaders[index]);
};

const checkRow = (row: string[], idx: number) => {
  // At this point, we know that the row has the expected number of columns
  const [date, description, category, price] = row;

  // check date: YYYY-MM-DD
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(date) || new Date(date).toString() === "Invalid Date")
    return `Linea: ${idx + 1}\nLa fecha ${date} no tiene el formato esperado. Debe ser YYYY-MM-DD.`;

  // check description max length
  if (description.length > DESCRIPTION_MAX_LENGTH)
    return `Linea: ${idx + 1}\nLa descripción excede el límite de caracteres. ${
      description.length
    }/${DESCRIPTION_MAX_LENGTH}`;

  // check category max length
  if (category.length > CATEGORY_MAX_LENGTH)
    return `Linea: ${idx + 1}\nLa categoría excede el límite de caracteres. ${category.length}/${CATEGORY_MAX_LENGTH}`;

  // check amount is number and has max length
  const priceRegex = /^\d{1,7}?/;
  if (!priceRegex.test(price))
    return `Linea: ${idx + 1}\nEl precio ${price} no tiene el formato esperado. Máximo 7 dígitos.`;

  return "";
};

const readExpectedFile = (file: File): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result;
      if (typeof result === "string") {
        const data = result.split("\n").map((line: string) => line.split(";"));

        // [ERROR] data is empty
        if (data.length === 0) {
          reject(new Error("El archivo CSV está vacío."));
          return;
        }

        const headers: FileHeader[] = data[0].map((header: string) => header.toLowerCase().trim() as FileHeader);
        const isValidHeaders = checkHeaders(headers);

        // [ERROR] headers are invalid
        if (!isValidHeaders) {
          reject(new Error("El archivo CSV no tiene las cabeceras esperadas."));
          return;
        }

        // [ERROR] data has invalid format (not all lines have the same number of columns)
        const isValidFormat = data.every((line) => line.length === MAX_COLS);
        if (!isValidFormat) {
          reject(new Error("El archivo CSV no tiene el formato esperado."));
          return;
        }

        const transactions = data.slice(1).map((line: string[], idx): Transaction => {
          line = line.map((field) => field.trim());
          const [date, description, category, price] = line;

          // [ERROR] data has empty fields
          if (!date || !description || !category || !price) reject(new Error("El archivo CSV tiene campos vacíos."));

          // [ERROR] data has invalid format
          const rowMsg = checkRow(line, idx);
          if (rowMsg) reject(new Error(rowMsg));

          return headers.reduce(
            (acc: any, header, index) => {
              acc[header] = line[index].toLowerCase();
              return acc;
            },
            {
              categoryEmoji: resolveEmojiCategory(category.toLowerCase() as Category),
            }
          );
        });
        resolve(transactions);
      }
    };

    reader.onerror = (event) => {
      reject(new Error("Error al leer el archivo."));
      return;
    };

    reader.readAsText(file);
  });
};

export default readExpectedFile;
