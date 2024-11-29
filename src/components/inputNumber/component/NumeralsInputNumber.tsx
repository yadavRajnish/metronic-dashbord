import React, { useState } from "react";
import SubHeading from "../../heading/SubHeading";
import { InputMask } from "primereact/inputmask";
import { InputNumber } from "primereact/inputnumber";

const NumeralsInputNumber = () => {
  const [value1, setValue1] = useState(42723);
  const [value2, setValue2] = useState(58151);
  const [value3, setValue3] = useState(2351.35);
  const [value4, setValue4] = useState(50);

  const handleChange = (e: {
    target: { value: React.SetStateAction<number> };
  }) => {
    // setValue(e.target.value);
  };
  return (
    <div>
      <SubHeading value="Numerals" />
      <div className="card-body p-12 m-auto bg-[#fff] max-w-[500px] rounded-lg border-[#f1f1f4] border flex flex-wrap p-fluid gap-6">
        <div className="flex-auto">
          <label htmlFor="integeronly" className="form-label block mb-2">
            Integer Only
          </label>
          <InputNumber
            inputId="integeronly"
            value={value1}
            onValueChange={e => setValue1(e.value)}
            className="!input"
          />
        </div>
        <div className="flex-auto">
          <label htmlFor="withoutgrouping" className="form-label block mb-2">
            Without Grouping
          </label>
          <InputNumber
            inputId="withoutgrouping"
            value={value2}
            onValueChange={e => setValue2(e.value)}
            useGrouping={false}
            className="!input"
          />
        </div>
        <div className="flex-auto">
          <label htmlFor="minmaxfraction" className="form-label block mb-2">
            Min-Max Fraction Digits
          </label>
          <InputNumber
            inputId="minmaxfraction"
            value={value3}
            onValueChange={e => setValue3(e.value)}
            minFractionDigits={2}
            maxFractionDigits={5}
            className="!input"
          />
        </div>
        <div className="flex-auto">
          <label htmlFor="minmax" className="form-label block mb-2">
            Min-Max Boundaries
          </label>
          <InputNumber
            inputId="minmax"
            value={value4}
            onValueChange={e => setValue4(e.value)}
            min={0}
            max={100}
            className="!input"
          />
        </div>
      </div>
    </div>
  );
};

export default NumeralsInputNumber;
