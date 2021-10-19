import React from "react";

export default function MenuWrapper({ children }) {
  return (
    <div
      style={{
        gridColumn: "1/ 7",
        backgroundColor: "lightBlue",
      }}
    >
      {children}
    </div>
  );
}
