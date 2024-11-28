import Heading from "../heading/Heading";
import RequiredInputText from "./component/RequiredInputText";
import LabelInputText from "./component/LabelInputText";
import BasicInputText from "./component/BasicInputText";
import HintInputText from "./component/HintInputText";
import IconInputText from "./component/IconInputText";
import TooltipInputText from "./component/TooltipInputText";
import ValidationInputText from "./component/ValidationInputText";
import DisableInputText from "./component/DisableInputText";
import DefaultSizeInputText from "./component/DefaultSizeInputText";
import IconSizeInputText from "./component/IconSizeInputText";
import FloatLableInputText from "./component/FloatLableInputText";
import "./style.css";

function InputTxt() {
  return (
    <div className="w-full h-full">
      <Heading value="InputText" />
      <BasicInputText />
      <LabelInputText />
      <FloatLableInputText />
      <RequiredInputText />
      <HintInputText />
      <IconInputText />
      <TooltipInputText />
      <ValidationInputText />
      <DisableInputText />
      <DefaultSizeInputText />
      <IconSizeInputText />
    </div>
  );
}

export default InputTxt;
