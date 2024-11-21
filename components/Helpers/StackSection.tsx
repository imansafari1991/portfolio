import React from "react";
import { FaCheck } from "react-icons/fa";
type Props = {
  iconColor: string;
  title: string;
};
const StackSection = ({ iconColor, title }: Props) => {
  return (
    <div className="flex items-center space-x-2 mb-6">
      <div
        className={`w-7 h-7 ${iconColor} flex flex-col items-center justify-center`}
      >
        <FaCheck className="text-white" />
      </div>
      <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
        {title}
      </p>
    </div>
  );
};

export default StackSection;
