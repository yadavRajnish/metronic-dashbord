import React, { useState } from "react";
import SubHeading from "../../heading/SubHeading";
import { InputMask } from "primereact/inputmask";
import { InputNumber } from "primereact/inputnumber";

const BasicInputNumber = () => {
  const [value, setValue] = useState(null);

  const handleChange = (e: {
    target: { value: React.SetStateAction<number> };
  }) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <SubHeading value="Basic" />
      <div className="card-body p-12 m-auto bg-[#fff] max-w-[500px] rounded-lg border-[#f1f1f4] border flex flex-col gap-6">
        <InputNumber
          value={value}
          onValueChange={e => setValue(e.value)}
          className="!input-sm !input"
          placeholder="Small"
        />
        <InputNumber
          value={value}
          onValueChange={e => setValue(e.value)}
          className="!input"
          placeholder="Default"
        />
        <InputNumber
          value={value}
          onValueChange={e => setValue(e.value)}
          className="!input-lg !input"
          placeholder="Large"
        />
      </div>
    </div>
    // </div>
  );
};

export default BasicInputNumber;
