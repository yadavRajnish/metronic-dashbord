import React from "react";

const Dropdown = () => {
  return (
    <div
      className="dropdown"
      data-dropdown="true"
      data-dropdown-trigger="click"
    >
      <button className="dropdown-toggle btn btn-light">Show Dropdown</button>
      <div className="dropdown-content w-full max-w-56 py-2">
        <div className="menu menu-default flex flex-col w-full">
          <div className="menu-item">
            <a className="menu-link" href="#">
              <span className="menu-icon">
                <i className="ki-outline ki-badge"></i>
              </span>
              <span className="menu-title">Menu item 1</span>
            </a>
          </div>
          <div className="menu-item">
            <a className="menu-link" href="#">
              <span className="menu-icon">
                <i className="ki-outline ki-profile-circle"></i>
              </span>
              <span className="menu-title">Menu item 2</span>
            </a>
          </div>
          <div className="menu-item">
            <a className="menu-link" href="#">
              <span className="menu-icon">
                <i className="ki-outline ki-setting-2"></i>
              </span>
              <span className="menu-title">Menu item 3</span>
              <span className="menu-badge">
                <span className="badge badge-sm badge-outline badge-pill badge-primary">
                  New
                </span>
              </span>
            </a>
          </div>
          <div className="menu-item">
            <a className="menu-link" href="#">
              <span className="menu-icon">
                <i className="ki-outline ki-message-programming"></i>
              </span>
              <span className="menu-title">Menu item 4</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
