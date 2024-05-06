import { useState } from "react";
import { handleFile } from "../utils/validationFile";

const useDragAndDropFile = (acceptedTypes: string[], maxFileSize: number = 2097152) => {
  const [file, setFile] = useState<File | null>(null);
  const [errorMsg, setErrorMsg] = useState(""); // Define error message
  const [draggingOver, setDraggingOver] = useState(false); // Track dragging over state

  const handleError = (error: string) => {
    setErrorMsg(error);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDraggingOver(false);
    const droppedFile = e.dataTransfer.files[0];

    const error = handleFile(droppedFile, acceptedTypes, maxFileSize);
    if (error) {
      handleError(error);
      return;
    }
    setFile(droppedFile);
    handleError("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const selectedFile = e.target.files && e.target.files[0];
    const error = handleFile(selectedFile, acceptedTypes, maxFileSize);
    if (error) {
      handleError(error);
      return;
    }
    setFile(selectedFile);
    handleError("");
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDraggingOver(true);
  };

  const handleDragLeave = () => {
    setDraggingOver(false);
  };

  return {
    file,
    errorMsg,
    handleError,
    draggingOver,
    handleDrop,
    handleChange,
    handleDragOver,
    handleDragLeave,
  };
};

export default useDragAndDropFile;
