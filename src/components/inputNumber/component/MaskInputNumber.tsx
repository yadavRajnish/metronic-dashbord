import React, { useState } from "react";
import SubHeading from "../../heading/SubHeading";
import { InputMask } from "primereact/inputmask";

const MaskInputNumber = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <SubHeading value="Mask" />
      <div className="card-body p-12 max-w-[500px] bg-[#fff] m-auto rounded-lg border-[#f1f1f4] border">
        <div className="p-fluid flex flex-wrap gap-4">
          <div className="flex-auto">
            <label htmlFor="ssn" className="form-label max-w-32">
              SSN
            </label>
            <InputMask
              id="ssn"
              mask="999-99-9999"
              placeholder="999-99-9999"
              className="!input"
            ></InputMask>
          </div>

          <div className="flex-auto">
            <label htmlFor="phone" className="form-label max-w-32">
              Phone
            </label>
            <InputMask
              id="phone"
              mask="(999) 999-9999"
              placeholder="(999) 999-9999"
              className="!input"
            ></InputMask>
          </div>

          <div className="flex-auto">
            <label htmlFor="serial" className="form-label max-w-32">
              Serial
            </label>
            <InputMask
              id="serial"
              mask="a*-999-a999"
              placeholder="a*-999-a999"
              className="!input"
            ></InputMask>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaskInputNumber;
