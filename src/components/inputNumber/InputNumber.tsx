import React from "react";
import Heading from "../heading/Heading";
import BasicInputNumber from "./component/BasicInputNumber";
import MaskInputNumber from "./component/MaskInputNumber";
import OptionalInputNumber from "./component/OptionalInputNumber";
import SlotCharInputNumber from "./component/SlotCharInputNumber";
import FloatLableInputNumber from "./component/FloatLableInputNumber";
import InvalidInputNumber from "./component/InvalidInputNumber";
import DisableInputNumber from "./component/DisableInputNumber";

import "./style.css";
import NumeralsInputNumber from "./component/NumeralsInputNumber";
import LocaleInputNumber from "./component/LocaleInputNumber";
import CurrencyInputNumber from "./component/CurrencyInputNumber";
import PrefixSuffixInputNumber from "./component/PrefixSuffixInputNumber";
import ButtonsInputNumber from "./component/ButtonsInputNumber";

const InputNumber = () => {
  return (
    <div className="w-full h-full">
      <Heading value="Input Number" />
      <BasicInputNumber />
      <NumeralsInputNumber />
      <LocaleInputNumber />
      <CurrencyInputNumber />
      <PrefixSuffixInputNumber />
      <ButtonsInputNumber />
      <MaskInputNumber />
      <OptionalInputNumber />
      <SlotCharInputNumber />
      <FloatLableInputNumber />
      <InvalidInputNumber />
      <DisableInputNumber />
    </div>
  );
};

export default InputNumber;
