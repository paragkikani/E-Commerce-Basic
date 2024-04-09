import React from "react";

function TextButton({ title, onPress }) {
  return (
    <div className="flex justify-center ">
      <button
        onClick={onPress}
        className="bg-slate-200 px-3 rounded-sm border-black ring-1 ring-black"
      >
        {title}
      </button>
    </div>
  );
}

export default TextButton;
