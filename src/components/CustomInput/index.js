import React from "react";

const CustomInput = ({ placeHolder, name, onChange, value, type }) => {
  return (
    <div>
      <input
        placeholder={placeHolder}
        name={name}
        // onChange={(e) => onChange(e)}
        value={value}
        type={type}
      />
    </div>
  );
};

export default CustomInput;
