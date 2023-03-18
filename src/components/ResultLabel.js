import React from "react";

export default function ResultLabel({ result }) {
  let color = "";
  if (result) {
    switch (result.CLASS_NAME) {
      // ['MyMo', 'บัตรและสลากออมสิน', 'สินเชื่อ', 'อื่น ๆ', 'เงินฝาก']
      case "MyMo":
        color = "red";
        break;
      case "บัตรและสลากออมสิน":
        color = "pink";
        break;
      case "สินเชื่อ":
        color = "green";
        break;
      case "อื่น ๆ":
        color = "lightgray";
        break;
      case "เงินฝาก":
        color = "yellow";
        break;
      default:
        color = "blue";
        break;
    }
  }

  return (
    <div>
      {result.CLASS_NAME && <div style={{ color }}>{result.CLASS_NAME}</div>}
      {result.PROBABILITY && <div>{result.PROBABILITY}</div>}
    </div>
  );
}
