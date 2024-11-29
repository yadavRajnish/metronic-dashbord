import React, { useState } from "react";
import SubHeading from "../../heading/SubHeading";
import { InputMask } from "primereact/inputmask";
import { InputNumber } from "primereact/inputnumber";

const PrefixSuffixInputNumber = () => {
  const [value1, setValue1] = useState(20);
  const [value2, setValue2] = useState(50);
  const [value3, setValue3] = useState(2);
  const [value4, setValue4] = useState(20);

  const handleChange = (e: {
    target: { value: React.SetStateAction<number> };
  }) => {
    // setValue(e.target.value);
  };
  return (
    <div>
      <SubHeading value="Prefix & Suffix" />
      <div className="card-body p-12 m-auto bg-[#fff] max-w-[500px] rounded-lg border-[#f1f1f4] border flex flex-wrap p-fluid gap-6">
        <div className="flex-auto">
          <label htmlFor="mile" className="form-label block mb-2">
            Mile
          </label>
          <InputNumber
            inputId="mile"
            value={value1}
            onValueChange={e => setValue1(e.value)}
            suffix=" mi"
            className="!input"
          />
        </div>
        <div className="flex-auto">
          <label htmlFor="percent" className="form-label block mb-2">
            Percent
          </label>
          <InputNumber
            inputId="percent"
            value={value2}
            onValueChange={e => setValue2(e.value)}
            prefix="%"
            className="!input"
          />
        </div>
        <div className="flex-auto">
          <label htmlFor="expiry" className="form-label block mb-2">
            Expiry
          </label>
          <InputNumber
            inputId="expiry"
            value={value3}
            onValueChange={e => setValue3(e.value)}
            prefix="Expires in "
            suffix=" days"
            className="!input"
          />
        </div>
        <div className="flex-auto">
          <label htmlFor="temperature" className="form-label block mb-2">
            Temperature
          </label>
          <InputNumber
            inputId="temperature"
            value={value4}
            onValueChange={e => setValue4(e.value)}
            prefix="&uarr; "
            suffix="℃"
            min={0}
            max={40}
            className="!input"
          />
        </div>
      </div>
    </div>
  );
};

export default PrefixSuffixInputNumber;
