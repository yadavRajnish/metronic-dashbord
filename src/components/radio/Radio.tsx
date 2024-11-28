import React from "react";

const Radio = () => {
  return (
    <div className="flex flex-col items-start gap-4">
      <label className="form-label flex items-center gap-2.5">
        <input className="radio" name="radio1" type="radio" value="1" />
        Default radio
      </label>
      <label className="form-label flex items-center gap-2.5">
        <input checked className="radio" name="radio1" type="radio" value="2" />
        Checked radio
      </label>
    </div>
  );
};

export default Radio;
