import React from "react";

export default function FullWidthWrapper({ children }) {
  return (
    <div
      style={{
        gridColumn: "span 12",
      }}
    >
      {children}
    </div>
  );
}
