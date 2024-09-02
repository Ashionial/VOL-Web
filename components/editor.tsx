"use client";

import React, { useRef, useState } from "react";
import Editor, { Monaco } from "@monaco-editor/react";

const App = (props: {onChange: (code: string) => void, value: string}) => {
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        console.log(reader.result);
        props.onChange(reader.result as string);
      };
      reader.readAsText(file);
    }
  };


  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="w-full h-full"
    >
      <Editor
        height="90vh"
        defaultLanguage="dockerfile"
        defaultValue="# drop file here"
        theme="vs-dark"
        value={props.value}
        onChange={(value) => props.onChange(value || "")}
        />
    </div>
  );
};

export default App;
