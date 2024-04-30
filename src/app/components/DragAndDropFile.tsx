"use client";
import { useState } from "react";
import { validationFile } from "../utils/validationFile";

interface DragAndDropFileProps {
  acceptedTypes: string[]; // Change to an array of string
}

const DragAndDropFile = ({ acceptedTypes }: DragAndDropFileProps) => {
  const [file, setFile] = useState<File | null>(null); // Define file type
  const acceptanceTypesPlain = acceptedTypes.map((type) => "." + type).join(","); // Used in input file
  console.log(acceptanceTypesPlain);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (!validationFile(droppedFile, acceptedTypes)) return;
    console.log(droppedFile);
    setFile(droppedFile);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="w-full h-200px border-2 border-dashed border-gray-300 rounded-md p-4 text-center"
    >
      <p>Drag & drop a file here</p>
      <input type="file" accept={acceptanceTypesPlain} />
      {file && <p>Uploaded file: {file.name}</p>}
    </div>
  );
};

export default DragAndDropFile;
