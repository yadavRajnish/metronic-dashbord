import React from "react";

const Switch = () => {
  return (
    <div className="flex gap-4">
      <label className="switch switch-sm">
        <input className="order-1" name="check" type="checkbox" value="1" />
        <span className="switch-label order-2">Small</span>
      </label>
      <label className="switch">
        <input className="order-1" name="check" type="checkbox" value="1" />
        <span className="switch-label order-2">Default</span>
      </label>
      <label className="switch switch-lg">
        <input className="order-1" name="check" type="checkbox" value="1" />
        <span className="switch-label order-2">Large</span>
      </label>
    </div>
  );
};

export default Switch;
