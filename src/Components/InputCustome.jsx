import { Input } from "@material-tailwind/react";
import classnames from "classnames";
import React, { useState } from "react";
import { PiEyeClosed } from "react-icons/pi";
import { PiEye } from "react-icons/pi";

function InputCustome({ label, inputMode, onChange, className, type, error }) {
  const classStyle = classnames("font-chakra ", className);
  const [updateType, setUpdateType] = useState(type);
  const [passwordShow, setPasswordShow] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShow((prevShow) => !prevShow);
    setUpdateType(passwordShow ? "password" : "text");
  };

  return (
    <div className="flex justify-center ">
      <div className="w-full font-chakra text-black  py-2">
        <Input
          label={label}
          size="lg"
          inputMode={inputMode}
          onChange={(e) => onChange(e.target.value)}
          className={classStyle}
          style={{ fontFamily: "Chakra Petch" }}
          type={type == "password" ? updateType : type}
          error={error}
          icon={
            type === "password" &&
            (passwordShow ? (
              <PiEye onClick={togglePasswordVisibility} />
            ) : (
              <PiEyeClosed onClick={togglePasswordVisibility} />
            ))
          }
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          crossOrigin={undefined}
        />
      </div>
    </div>
  );
}

export default InputCustome;
