import React from "react";

interface H3TitleProps {
  title: string;
}

const H3Title: React.FC<H3TitleProps> = ({ title }) => {
  return (
    <h3 className="text-2xl p-4 text-centermd:text-left font-semibold pt-5 font-alegreya italic">
      {title}
    </h3>
  );
};

export default H3Title;
