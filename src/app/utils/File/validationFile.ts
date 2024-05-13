import { formatBytes } from "../formatNumber";

const validationFile = (file: File, acceptedTypes: string[]) => {
  /*
    This function takes a file and an array of accepted types as arguments.
    It checks if the file type or extension matches any of the accepted types.
    
    If the file type or extension matches any of the accepted types, it returns true.
    Otherwise, it returns false.

    e.g. validationFile(file, ["csv", "text/csv"])
  */

  let fileExtension;
  try {
    fileExtension = file.name.split(".").pop(); // Extract file extension
  } catch (e) {
    return false;
  }
  if (!fileExtension || !file.type) return false; // Handle cases where file extension or type are not present
  const lowerCaseExtension = fileExtension.toLowerCase();
  const lowerCaseType = file.type.split("/")[1].toLowerCase();

  // Check if the file extension or type matches any of the accepted types
  return acceptedTypes.some((type) => {
    const lowerCaseAcceptedType = type.toLowerCase(); // ex: text/csv
    return lowerCaseExtension === lowerCaseAcceptedType || lowerCaseType === lowerCaseAcceptedType;
  });
};

const isValidFileSize = (fileSize: File["size"], maxFileSize: number = 2097152) => {
  /*
    This function takes a file size as an argument.
    It checks if the file size is less than 2MB (2097152 bytes).

    If the file size is less than 2MB, it returns true.
    Otherwise, it returns false.

    e.g. isValidFileSize(file.size, 2097152)
  */
  if (fileSize >= maxFileSize) return false;
  return true;
};

const handleFile = (file: File | null, acceptedTypes: string[], maxFileSize: number = 2097152) => {
  /*
    This function takes a file and an array of accepted types as arguments.
    It validates the file type and size.

    If the file type is invalid, it returns "Invalid file type".
    If the file size exceeds 2MB, it returns "File size exceeds 2MB".
    Otherwise, it returns an empty string.

    e.g. handleFile(file, ["csv", "text/csv"])
  */
  if (!file || !validationFile(file, acceptedTypes)) {
    return "Invalid file type";
  }
  if (!isValidFileSize(file.size, maxFileSize)) {
    return `File size exceeds ${formatBytes(maxFileSize)}`;
  }
  return "";
};

/* 
  This function takes an array of accepted types as an argument.
  It returns a string with the accepted types separated by commas.

  e.g. acceptanceTypesPlain(["csv", "text/csv"]) -> ".csv,.text/csv"
*/
const acceptanceTypesPlain = (acceptedTypes: string[]) => acceptedTypes.map((type) => "." + type).join(","); // Used in input file

export { validationFile, handleFile, acceptanceTypesPlain };
