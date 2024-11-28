import React from "react";

const SubHeading = ({ value }: { value: string }) => {
  return (
    <h1 className="text-xl font-medium text-gray-700 mt-5 mb-2">{value}</h1>
  );
};

export default SubHeading;
