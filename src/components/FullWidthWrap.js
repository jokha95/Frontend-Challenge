import React from "react";

export default function FullWidthWrapper({ children }) {
  return (
    <div
      style={{
        gridColumn: "7/ 12",
        backgroundColor: "grey",
      }}
    >
      {children}
    </div>
  );
}
