import React from "react";

const Heading = ({ value }: { value: string }) => {
  return <h1 className="text-2xl font-bold text-gray-900">{value}</h1>;
};

export default Heading;
