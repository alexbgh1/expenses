"use client";
import { useEffect, useId } from "react";
import useDragAndDropFile from "../hooks/useDragAndDropFile";
import { acceptanceTypesPlain } from "../utils/File/validationFile";

interface DragAndDropFileProps {
  setFile: (file: File | null) => void;
  acceptedTypes: string[]; // Change to an array of string
}

const DragAndDropFile = ({ acceptedTypes, setFile }: DragAndDropFileProps) => {
  //TODO: Refactor using custom hooks
  const { file, errorMsg, draggingOver, handleDrop, handleChange, handleDragOver, handleDragLeave } =
    useDragAndDropFile(acceptedTypes);

  const id = useId();
  const acceptanceTypes = acceptanceTypesPlain(acceptedTypes);

  useEffect(() => {
    setFile(file);
  }, [file]);

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`flex flex-col border-2 relative border-dashed rounded-md text-center ${
        draggingOver ? "dark:border-blue-600 border-blue-500" : "border-gray-300 dark:border-zinc-600"
      }`}
    >
      <label className="w-full h-full py-8" htmlFor={id}>
        Drag & drop a file here
      </label>
      <input id={id} type="file" accept={acceptanceTypes} onChange={handleChange} className="hidden" />
      {file && <p className="absolute top-1/2 left-1/2 -translate-x-1/2 mt-3 ">Uploaded file: {file.name}</p>}

      {/* TODO: Improve error message display */}
      {errorMsg && <p className="text-red-500">{errorMsg}</p>}
    </div>
  );
};

export default DragAndDropFile;
