import React from "react";
import { TiDelete } from "react-icons/ti";

function PreviewImage({ allFiles, remove }) {
  return (
    <div className="flex justify-center  ">
      <div className="w-full justify-center flex flex-wrap">
        {allFiles.length > 0 &&
          allFiles.map((file) => (
            <div
              key={file}
              className="relative border-2 border-black bg-slate-400 rounded-md flex-wrap"
            >
              <img width={100} height={100} src={file} />
              <TiDelete
                className="w-8 h-8 absolute top-0 right-0"
                onClick={() => remove(file)}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default PreviewImage;
