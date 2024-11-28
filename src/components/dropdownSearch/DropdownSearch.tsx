import React, { useDebugValue, useEffect, useState } from "react";
import { Dropdown } from "primereact/dropdown";

export default function DropdownSearch() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const countries = [
    { name: "Australia", code: "AU" },
    { name: "Germany", code: "DE" },
    { name: "India", code: "IN" },
    { name: "United States", code: "US" },
  ];

  const selectedCountryTemplate = (option: any, props: any) => {
    if (option) {
      return (
        <div className="flex align-items-center">
          <div>{option.name}</div>
        </div>
      );
    }
    return (
      <span className="menu-title text-sm  text-gray-700">
        {props.placeholder}
      </span>
    );
  };

  const countryOptionTemplate = (option: any) => {
    return <div>{option.name}</div>;
  };

  return (
    <div className="card flex justify-content-center">
      <Dropdown
        value={selectedCountry}
        onChange={e => setSelectedCountry(e.value)}
        options={countries}
        optionLabel="name"
        placeholder="Select a Country"
        filter
        valueTemplate={selectedCountryTemplate}
        itemTemplate={countryOptionTemplate}
        className="w-full md:w-14rem min-w-72 max-w-80"
      />
    </div>
  );
}
