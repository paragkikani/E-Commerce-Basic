import {
  Card,
  Input,
  CardBody,
  Dialog,
  Typography,
  Checkbox,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import React, { useState } from "react";
import SingupDialog from "./SingupDialog";
import InputCustome from "../Components/InputCustome";
import { validateEmail } from "../utils/Validation";

function LoginDialog({ open, onClose }) {
  const [mail, setMail] = useState("");
  const [mailError, setMailError] = useState(false);
  const [password, setPassword] = useState("");

  const handleMail = (val) => {
    if (validateEmail(val)) {
      setMail(val);
      setMailError(false);
    } else {
      setMailError(true);
    }
  };

  const [signupDialog, setSignupDialog] = useState(false);
  const openSignupDialog = () => {
    setSignupDialog(true);
  };

  const handleLogin = () => {
    if (validateEmail(mail) && password.length > 4) {
    }
  };
  return (
    <div>
      <Dialog
        size="xs"
        open={open}
        handler={!signupDialog && onClose}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color=" blue-gray" className="font-chakra">
              Sign In
            </Typography>
            <Typography
              className="mb-3 font-normal font-chakra"
              variant="paragraph"
              color="gray"
            >
              Enter your email and password to Sign In.
            </Typography>

            <InputCustome
              label="Email"
              type="email"
              onChange={(e) => {
                handleMail(e);
              }}
              error={mailError}
            />

            <InputCustome
              label="Password"
              type="password"
              onChange={setPassword}
            />
            <div className="-ml-2.5 -mt-3 font-chakra ">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              onClick={handleLogin}
              fullWidth
              className="font-chakra"
            >
              Sign In
            </Button>
            <Typography
              variant="small"
              className="mt-4 flex justify-center font-chakra"
            >
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold font-chakra"
                onClick={openSignupDialog}
              >
                Sign up
              </Typography>
            </Typography>
            <Typography
              color="blue-gray"
              variant="small"
              className="flex font-bold justify-center font-chakra"
              onClick={onClose}
              href="#Forget Password?"
              as="a"
            >
              Forget Password?
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
      <SingupDialog
        open={signupDialog}
        onCloseSignup={() => setSignupDialog(false)}
      />
    </div>
  );
}

export default LoginDialog;
