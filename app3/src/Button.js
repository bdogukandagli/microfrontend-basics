import React from "react";

const style = {
  padding: 12,
  backgroundColor: "purple",
};

const Button = () => {
  return (
    <button onClick={() => console.log("Triggered")} style={style}>
      App3 Button - Child
    </button>
  );
};

export default Button;
