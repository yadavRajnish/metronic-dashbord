import React, { useState } from "react";
import SubHeading from "../../heading/SubHeading";
import { InputMask } from "primereact/inputmask";

const SlotCharInputNumber = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <SubHeading value="Slot Char" />
      <div className="card-body p-12 max-w-[500px] bg-[#fff] m-auto rounded-lg border-[#f1f1f4] border">
        <div className="flex justify-center gap-4 lg:p-2">
          <InputMask
            value={value}
            onChange={e => setValue(e.target.value)}
            mask="99/99/9999"
            placeholder="99/99/9999"
            slotChar="mm/dd/yyyy"
            className="!input"
          />
        </div>
      </div>
    </div>
  );
};

export default SlotCharInputNumber;
