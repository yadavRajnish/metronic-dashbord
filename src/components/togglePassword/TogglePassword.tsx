import React, { useState } from "react";

const TogglePassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <div
      className="input max-w-72 flex items-center"
      data-toggle-password="true"
    >
      <input
        placeholder="Password"
        type={showPassword ? "text" : "password"} // Toggle input type
        className="flex-1 px-2"
      />
      <button
        type="button"
        className="btn btn-icon ml-2"
        data-toggle-password-trigger="true"
        onClick={togglePasswordVisibility} // Toggle visibility on click
      >
        {showPassword ? (
          <i className="ki-outline ki-eye-slash"></i> // Icon for hidden password
        ) : (
          <i className="ki-outline ki-eye"></i> // Icon for visible password
        )}
      </button>
    </div>
  );
};

export default TogglePassword;
