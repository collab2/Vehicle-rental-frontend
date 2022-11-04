import React from "react";

export default function ListFooter({ title, content }) {
  return (
    <div>
      <h4 className="footer-title mb-4">{title}</h4>
      <ul>
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
