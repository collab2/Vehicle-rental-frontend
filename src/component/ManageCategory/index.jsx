import React from "react";
// import "./index.css";

export default function ManageCatagory(props) {
  console.log(props.category);
  return (
    <>
      <option value={props.category} style={{ cursor: "pointer" }}>
        {props.category}
      </option>
    </>
  );
}
