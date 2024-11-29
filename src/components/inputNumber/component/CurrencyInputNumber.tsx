import React, { useState } from "react";
import SubHeading from "../../heading/SubHeading";
import { InputMask } from "primereact/inputmask";
import { InputNumber } from "primereact/inputnumber";

const CurrencyInputNumber = () => {
  const [value1, setValue1] = useState(1500);
  const [value2, setValue2] = useState(2500);
  const [value3, setValue3] = useState(4250);
  const [value4, setValue4] = useState(5002);

  const handleChange = (e: {
    target: { value: React.SetStateAction<number> };
  }) => {
    // setValue(e.target.value);
  };
  return (
    <div>
      <SubHeading value="Currency" />
      <div className="card-body p-12 m-auto bg-[#fff] max-w-[500px] rounded-lg border-[#f1f1f4] border flex flex-wrap p-fluid gap-6">
        <div className="flex-auto">
          <label htmlFor="currency-us" className="form-label block mb-2">
            United States
          </label>
          <InputNumber
            inputId="currency-us"
            value={value1}
            onValueChange={e => setValue1(e.value)}
            mode="currency"
            currency="USD"
            locale="en-US"
            className="!input"
          />
        </div>
        <div className="flex-auto">
          <label htmlFor="currency-germany" className="form-label block mb-2">
            Germany
          </label>
          <InputNumber
            inputId="currency-germany"
            value={value2}
            onValueChange={e => setValue2(e.value)}
            mode="currency"
            currency="EUR"
            locale="de-DE"
            className="!input"
          />
        </div>
        <div className="flex-auto">
          <label htmlFor="currency-india" className="form-label block mb-2">
            India
          </label>
          <InputNumber
            inputId="currency-india"
            value={value3}
            onValueChange={e => setValue3(e.value)}
            mode="currency"
            currency="INR"
            currencyDisplay="code"
            locale="en-IN"
            className="!input"
          />
        </div>
        <div className="flex-auto">
          <label htmlFor="currency-japan" className="form-label block mb-2">
            Japan
          </label>
          <InputNumber
            inputId="currency-japan"
            value={value4}
            onValueChange={e => setValue4(e.value)}
            mode="currency"
            currency="JPY"
            locale="jp-JP"
            className="!input"
          />
        </div>
      </div>
    </div>
  );
};

export default CurrencyInputNumber;
