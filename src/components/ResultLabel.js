import React from "react";

export default function ResultLabel({ result }) {
    let color = "#29ab49"

  return (
    <div>
      <div style={{color}}>{result.CLASS_NAME}</div>
      <div>{result.PROBABILITY}</div>
    </div>
  );
}
