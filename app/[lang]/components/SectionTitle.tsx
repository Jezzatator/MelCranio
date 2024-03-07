import React from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <h2 className="text-2xl p-4 md:p-0 text-center md:text-left font-bold font-alegreya italic">
      {title}
    </h2>
  );
};

export default SectionTitle;

// "text-2xl p-4 md:p-0 text-center md:text-left font-bold font-alegreya italic mb-10"
