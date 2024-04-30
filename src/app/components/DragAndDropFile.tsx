"use client";
import { useState } from "react";
import { validationFile } from "../utils/validationFile";

interface DragAndDropFileProps {
  acceptedTypes: string[]; // Change to an array of string
}

const DragAndDropFile = ({ acceptedTypes }: DragAndDropFileProps) => {
  //TODO: Refactor using custom hooks
  const [file, setFile] = useState<File | null>(null); // Define file type
  const [errorMsg, setErrorMsg] = useState();
  const [draggingOver, setDraggingOver] = useState(false); // Track dragging over state
  const acceptanceTypesPlain = acceptedTypes.map((type) => "." + type).join(","); // Used in input file

  const isValidFileSize = (fileSize: File["size"]) => {
    if (fileSize >= 2097152) return false;
    return true;
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDraggingOver(false);
    const droppedFile = e.dataTransfer.files[0];
    if (!validationFile(droppedFile, acceptedTypes)) return;
    if (!isValidFileSize(droppedFile.size)) return;
    setFile(droppedFile);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const selectedFile = e.target.files && e.target.files[0];
    if (!selectedFile || !validationFile(selectedFile, acceptedTypes)) return;
    if (!isValidFileSize(selectedFile.size)) return;
    setFile(selectedFile);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDraggingOver(true);
  };

  const handleDragLeave = () => {
    setDraggingOver(false);
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`w-full h-200px border-2 border-dashed rounded-md p-4 text-center ${
        draggingOver ? "border-blue-500" : "border-gray-300"
      }`}
    >
      <label htmlFor="files">Drag & drop a file here</label>
      <input id="files" type="file" accept={acceptanceTypesPlain} onChange={handleFileChange} className="hidden" />
      {file && <p>Uploaded file: {file.name}</p>}
    </div>
  );
};

export default DragAndDropFile;
