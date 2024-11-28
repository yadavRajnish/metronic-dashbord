import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Dropdown from "../components/dropdown/Dropdown";
import TextArea from "../components/textarea/TextArea";
import Button from "../components/button/Button";
import Radio from "../components/radio/Radio";
import Switch from "../components/switch/Switch";
import TogglePassword from "../components/togglePassword/TogglePassword";
import DatePicker from "../components/datePicker/DatePicker";
import Selector from "../components/selector/Selector";
import DropdownSearch from "../components/dropdownSearch/DropdownSearch";
import InputTxt from "../components/inputText/InputTxt";
// import InputText from "../components/inputText/InputTxt";

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
      <Route path="/input-text" element={<InputTxt />} />
    </Routes>
  );
};

export default AppRoute;
