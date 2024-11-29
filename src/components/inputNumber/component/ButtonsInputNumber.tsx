import React, { useState } from "react";
import SubHeading from "../../heading/SubHeading";
import { InputMask } from "primereact/inputmask";
import { InputNumber } from "primereact/inputnumber";

const ButtonsInputNumber = () => {
  const [value1, setValue1] = useState(20);
  const [value2, setValue2] = useState(10.5);
  const [value3, setValue3] = useState(25);

  const handleChange = (e: {
    target: { value: React.SetStateAction<number> };
  }) => {
    // setValue(e.target.value);
  };
  return (
    <div>
      <SubHeading value="Buttons" />
      <div className="card-body p-12 m-auto bg-[#fff] max-w-[500px] rounded-lg border-[#f1f1f4] border flex flex-wrap p-fluid gap-6">
        <div className="flex-auto">
          <label htmlFor="stacked-buttons" className="form-label block mb-2">
            Stacked
          </label>
          <InputNumber
            inputId="stacked-buttons"
            value={value1}
            onValueChange={e => setValue1(e.value)}
            showButtons
            mode="currency"
            currency="USD"
            className=""
          />
        </div>
        <div className="flex-auto">
          <label htmlFor="minmax-buttons" className="form-label block mb-2">
            Min-Max Boundaries
          </label>
          <InputNumber
            inputId="minmax-buttons"
            value={value3}
            onValueChange={e => setValue3(e.value)}
            mode="decimal"
            showButtons
            min={0}
            max={100}
          />
        </div>
        <div className="flex-auto">
          <label htmlFor="horizontal-buttons" className="form-label block mb-2">
            Horizontal with Step
          </label>
          <InputNumber
            inputId="horizontal-buttons"
            value={value2}
            onValueChange={e => setValue2(e.value)}
            showButtons
            buttonLayout="horizontal"
            step={0.25}
            decrementButtonClassName="p-button-danger"
            incrementButtonClassName="p-button-success"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
            mode="currency"
            currency="EUR"
          />
        </div>{" "}
      </div>
    </div>
  );
};

export default ButtonsInputNumber;
