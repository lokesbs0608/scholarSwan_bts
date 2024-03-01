import React from "react";

const CustomSelectionInput = ({
  placeHolder,
  name,
  options,
  onChange,
  value,
}) => {
  console.log();
  return (
    <div className="m-2">
      <select style={{ width: "100%" }} placeHolder={placeHolder} name={name}>
        {options.map((item, index) => {
          return <option key={index}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default CustomSelectionInput;
