import React from "react";
import "./orderby.css";
import Select from "react-select";
const OrderBy = ({
  fromValue,
  toValue,
  onTypeChange,
  onFromValueChange,
  onToValueChange,
  onClearClick,
  options,
}) => {
  return (
    <div id="order" className="order">
      <div className="order-type">
        <Select
          className="type-select"
          options={options}
          classNamePrefix="option"
          onChange={(value) => onTypeChange(value)}
        />
      </div>
      <div className="order-id">
        <span>from</span>
        <input
          type="number"
          name="from"
          id="order-from"
          value={fromValue}
          onChange={(e) => onFromValueChange(e.target.value)}
        />
        <span>to</span>
        <input
          type="number"
          name="to"
          id="order-to"
          value={toValue}
          min={0}
          onChange={(e) => onToValueChange(e.target.value)}
        />
      </div>
      <div className="clear">
        <button onClick={onClearClick}>Clear</button>
      </div>
    </div>
  );
};

export default OrderBy;
