import { useState } from "react";

const SubmitButton = ({ props = {}, options = {} }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      className="flex-column-relative center w-100 h-100"
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      {...props}
      style={{
        borderRadius: "4px",
        padding: "0 6px",
        color: "#c1c8cd",
        fontWeight: 800,
        marginBottom: "5px",
        backgroundColor: hovered ? "#7c8184ff" : "#65696b",
        ...(props.style ? { ...props.style } : {}),
      }}
    >
      {options.displayName || "Submit"}
    </button>
  );
};

export default SubmitButton;
