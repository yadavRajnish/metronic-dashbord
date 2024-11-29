import React, { useState } from "react";
import SubHeading from "../../heading/SubHeading";
import { InputMask } from "primereact/inputmask";
import { InputNumber } from "primereact/inputnumber";

const LocaleInputNumber = () => {
  const [value1, setValue1] = useState(151351);
  const [value2, setValue2] = useState(115744);
  const [value3, setValue3] = useState(635524);
  const [value4, setValue4] = useState(732762);

  const handleChange = (e: {
    target: { value: React.SetStateAction<number> };
  }) => {
    // setValue(e.target.value);
  };
  return (
    <div>
      <SubHeading value="Locale" />
      <div className="card-body p-12 m-auto bg-[#fff] max-w-[500px] rounded-lg border-[#f1f1f4] border flex flex-wrap p-fluid gap-6">
        <div className="flex-auto">
          <label htmlFor="locale-user" className="form-label block mb-2">
            User Locale
          </label>
          <InputNumber
            inputId="locale-user"
            value={value1}
            onValueChange={e => setValue1(e.value)}
            minFractionDigits={2}
            className="!input"
          />
        </div>
        <div className="flex-auto">
          <label htmlFor="locale-us" className="form-label block mb-2">
            United States Locale
          </label>
          <InputNumber
            inputId="locale-us"
            value={value2}
            onValueChange={e => setValue2(e.value)}
            locale="en-US"
            className="!input"
            minFractionDigits={2}
          />
        </div>
        <div className="flex-auto">
          <label htmlFor="locale-german" className="form-label block mb-2">
            German Locale
          </label>
          <InputNumber
            inputId="locale-german"
            value={value3}
            onValueChange={e => setValue3(e.value)}
            locale="de-DE"
            minFractionDigits={2}
            className="!input"
          />
        </div>
        <div className="flex-auto">
          <label htmlFor="locale-indian" className="form-label block mb-2">
            Indian Locale
          </label>
          <InputNumber
            inputId="locale-indian"
            value={value4}
            onValueChange={e => setValue4(e.value)}
            locale="en-IN"
            minFractionDigits={2}
            className="!input"
          />
        </div>
      </div>
    </div>
  );
};

export default LocaleInputNumber;
