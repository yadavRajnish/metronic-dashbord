import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import SubHeading from "../../heading/SubHeading";

const FloatLableInputText = () => {
  const [value, setValue] = useState("");
  const [value1, setValue2] = useState("");

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(e.target.value);
  };
  const handleChange2 = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue2(e.target.value);
  };
  return (
    <div>
      <SubHeading value="Float Label" />
      <div className="card-body p-12 max-w-[500px] bg-[#fff] m-auto rounded-lg border-[#f1f1f4] border">
        <div className="card flex justify-content-center">
          <FloatLabel>
            <InputText
              id="username"
              value={value}
              onChange={e => setValue(e.target.value)}
              className="!input"
            />

            <label
              htmlFor="username"
              className="!font-normal !text-[#99a1b9] text-[0.875rem]"
            >
              Username
            </label>
          </FloatLabel>
        </div>

        <div className="relative mt-10">
          <input
            id="floating_outlined"
            type="text"
            value={value1}
            className="!input block px-2.5 pb-2.5 pt-4 w-full text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer !text-[0.875rem]"
            placeholder=" "
            onChange={handleChange2}
          />

          <label
            htmlFor="floating_outlined"
            className="absolute  !text-[0.875rem] text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] bg-[#fcfcfc]  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Floating outlined
          </label>
        </div>
      </div>
    </div>
  );
};

export default FloatLableInputText;
