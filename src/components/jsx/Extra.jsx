import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "../../App.css";
function Extra() {
  const text = `I am readme text.😃 I will help you to understand how to work with markdown files in react.👍`


  return (
    <div className="readme">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
    </div>
  );
}

export default Extra;
