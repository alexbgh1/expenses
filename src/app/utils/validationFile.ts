const validationFile = (file: File, acceptedTypes: string[]) => {
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

export { validationFile };
