import { FileHeader } from "../types/file";

const MAX_COLS = 4;

const CATEGORY_MAX_LENGTH = 20;
const DESCRIPTION_MAX_LENGTH = 100;

const FILE_HEADERS: FileHeader[] = ["date", "description", "category", "price"];

export { FILE_HEADERS, MAX_COLS, DESCRIPTION_MAX_LENGTH, CATEGORY_MAX_LENGTH };
