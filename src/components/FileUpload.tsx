"use client";
// This component is used to isolate the 'use client'

import { useTransactionContext } from "../contexts/TransactionContext";

import DragAndDropFile from "../components/DragAndDropFile";

const FileUpload = () => {
  const { setFile } = useTransactionContext();

  return <DragAndDropFile acceptedTypes={["csv", "txt"]} setFile={setFile} />;
};

export default FileUpload;
