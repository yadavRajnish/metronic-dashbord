import React, { useState } from "react";
import SubHeading from "../../heading/SubHeading";
import { InputMask } from "primereact/inputmask";

const InvalidInputNumber = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <SubHeading value="Invalid" />
      <div className="card-body p-12 max-w-[500px] bg-[#fff] m-auto rounded-lg border-[#f1f1f4] border">
        <div className="flex justify-center gap-4 lg:p-2">
          <InputMask
            invalid
            // value={value}
            // onChange={handleChange}
            mask="+91-9999999999"
            placeholder="+91-9999999999"
            className="!input !border-[#e24c4c]"
          />
        </div>
      </div>
    </div>
  );
};

export default InvalidInputNumber;
