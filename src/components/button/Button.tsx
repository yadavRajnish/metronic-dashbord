import React from "react";

const Button = () => {
  return (
    <div className="flex gap-4">
      <button className="btn btn-outline btn-primary">Primary</button>
      <button className="btn btn-outline btn-success">Success</button>
      <button className="btn btn-outline btn-info">Info</button>
      <button className="btn btn-outline btn-danger">Danger</button>
      <button className="btn btn-outline btn-warning">Warning</button>
    </div>
  );
};

export default Button;
