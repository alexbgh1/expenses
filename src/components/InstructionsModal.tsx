"use client";

import { useState, MouseEvent } from "react";
import { FileSpreadsheet, Calendar, Tag, FileText, InfoIcon } from "lucide-react";
import { XIcon as X } from "lucide-react";

interface InstructionItem {
  title: string;
  description: string;
  icon: JSX.Element;
}

const InstructionsModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleContentClick = (e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  };

  const instructionItems: InstructionItem[] = [
    {
      title: "Date",
      description: "The date of the transaction in format YYYY-MM-DD",
      icon: <Calendar className="w-5 h-5" aria-hidden="true" />,
    },
    {
      title: "Description",
      description: "A description of the transaction",
      icon: <FileText className="w-5 h-5" aria-hidden="true" />,
    },
    {
      title: "Category",
      description: "The category of the transaction",
      icon: <Tag className="w-5 h-5" aria-hidden="true" />,
    },
    {
      title: "Price",
      description: "The price of the transaction",
      icon: <FileSpreadsheet className="w-5 h-5" aria-hidden="true" />,
    },
  ];

  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 dark:bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center overflow-y-auto"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          {/* Container for mobile */}
          <div className="min-h-screen w-full flex items-center justify-center p-4">
            {/* Card component */}
            <div
              className="w-full max-w-2xl bg-white dark:bg-zinc-950 rounded-xl shadow-lg animate-in fade-in-0 zoom-in-95"
              onClick={handleContentClick}
            >
              {/* Card Header - Fixed */}
              <div className="relative p-4 sm:p-6 border-b dark:border-zinc-800">
                <button
                  className="absolute right-3 top-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-900 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4 dark:text-zinc-400" />
                </button>
                <h1 className="flex items-center gap-2 text-xl font-semibold dark:text-white pr-8">
                  <FileSpreadsheet className="w-6 h-6 text-blue-500" />
                  CSV File Instructions
                </h1>
              </div>

              {/* Card Content - Scrolleable */}
              <div className="p-4 sm:p-6 space-y-6 overflow-y-auto max-h-[calc(100vh-12rem)]">
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold dark:text-white">Required Columns</h2>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {instructionItems.map((item) => (
                      <div
                        key={item.title}
                        className="flex items-start gap-3 p-4 rounded-lg border dark:border-zinc-800 bg-gray-50 dark:bg-[rgb(18,18,18)]"
                      >
                        <div className="text-blue-500">{item.icon}</div>
                        <div>
                          <h3 className="font-medium dark:text-white">{item.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-zinc-400">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Example file format */}
                <div className="space-y-3">
                  <h2 className="text-lg font-semibold dark:text-white">File Format Example</h2>
                  <div className="bg-gray-50 dark:bg-[rgb(18,18,18)] p-4 rounded-lg overflow-x-auto border dark:border-zinc-800">
                    <code className="text-sm dark:text-zinc-400">
                      Date;Description;Category;Price
                      <br />
                      2024-10-31;Description;Category;100
                      <br />
                      2024-10-31;Trabajo trabajo;Work;150
                    </code>
                  </div>
                </div>
              </div>

              {/* Card Footer - Fixed */}
              <div className="p-4 sm:p-6 border-t dark:border-zinc-800">
                <div className="flex justify-end gap-3">
                  <button
                    className="px-4 py-2 rounded-lg border dark:border-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-900 transition-colors dark:text-zinc-400"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-700 hover:dark:bg-blue-800  transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Got it
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-center">
        <button
          className="p-1.5  text-white dark:bg-transparent "
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open instructions"
        >
          <InfoIcon
            className="fill-gray-500 rounded-full hover:fill-blue-600 hover:dark:fill-blue-900 hover:bg-blue-600 dark:hover:bg-blue-800 transition-colors  w-5 h-5"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  );
};

export default InstructionsModal;
