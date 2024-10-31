"use client";
import { Hammer } from "lucide-react";

interface WorkingInProgressProps {
  text: string;
}
export default function WorkingInProgress({ text }: WorkingInProgressProps) {
  const dotNumber = 7;
  const dotTo360 = 360 / dotNumber;
  return (
    <div className="flex w-full flex-col h-min">
      <div className="diagonal-pattern bg-yellow-500 w-full h-3 opacity-80"></div>
      <div className="mt-12 mx-auto relative flex flex-col items-center">
        <div className=" w-24 h-24 relative">
          <Hammer className="w-full h-full text-yellow-500 animate-hammer" />
          <div className="absolute inset-0">
            {[...Array(dotNumber)].map((_, i) => {
              return (
                <div key={i} className="absolute right-2 bottom-6">
                  <div
                    style={{ rotate: `${i * dotTo360}deg` }}
                    className="w-1 h-1 z-50 animate-sparkle bg-orange-300 rounded-full"
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
        <h2 className="text-xl text-center">{text}</h2>
      </div>
    </div>
  );
}
