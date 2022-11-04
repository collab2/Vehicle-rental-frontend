import React from "react";
// import "./index.css";

export default function ManageCatagory(props) {
  return (
    <>
      <option value={props.value} style={{ cursor: "pointer" }}>
        {props.name}
      </option>
    </>
  );
}
