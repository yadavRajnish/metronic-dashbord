import { Route, Routes } from "react-router";
import Button from "../components/button/Button";
import DatePicker from "../components/datePicker/DatePicker";
import Dropdown from "../components/dropdown/Dropdown";
import DropdownSearch from "../components/dropdownSearch/DropdownSearch";
import InputNumber from "../components/inputNumber/InputNumber";
import InputTxt from "../components/inputText/InputTxt";
import Radio from "../components/radio/Radio";
import Selector from "../components/selector/Selector";
import Switch from "../components/switch/Switch";
import TextArea from "../components/textarea/TextArea";
import TogglePassword from "../components/togglePassword/TogglePassword";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/dropdown" element={<Dropdown />} />
      <Route path="/textarea" element={<TextArea />} />
      <Route path="/button" element={<Button />} />
      <Route path="/radio" element={<Radio />} />
      <Route path="/switch" element={<Switch />} />
      <Route path="/toogle-password" element={<TogglePassword />} />
      <Route path="/date-picker" element={<DatePicker />} />
      <Route path="/selector" element={<Selector />} />
      <Route path="/dropdown-search" element={<DropdownSearch />} />
      <Route path="/input-number" element={<InputNumber />} />
      <Route path="/input-text" element={<InputTxt />} />
    </Routes>
  );
};

export default AppRoute;
