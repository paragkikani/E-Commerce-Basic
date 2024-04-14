import {
  Card,
  Button,
  Typography,
  Dialog,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import InputCustome from "../Components/InputCustome";
import { useState } from "react";
import LoginDialog from "./LoginDialog";
import { validateEmail } from "../utils/Validation";

function SingupDialog({ open, onCloseSignup }) {
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [mailColor, setMailColor] = useState("black");
  const [password, setPassword] = useState("");

  const handleSignup = () => {};

  const handleEmail = (val) => {
    if (validateEmail(val)) {
      setEmail(val);
      setMailColor("black");
    } else {
      setMailColor("red");
    }
  };

  return (
    <div>
      <Dialog
        size="xs"
        open={open}
        handler={onCloseSignup}
        className="bg-transparent shadow-none"
      >
        <Card className="font-chakra mx-auto w-full max-w-[24rem]">
          <CardBody className="font-chakra flex flex-col gap-4">
            <Typography className="font-chakra" variant="h4" color="blue-gray">
              Register
            </Typography>
            <Typography
              className="font-chakra mb-0 font-normal"
              variant="paragraph"
              color="gray"
            >
              Enter your email and password to Sign Up.
            </Typography>
            <InputCustome
              label="Mobile"
              className=""
              inputMode="numeric"
              type="text"
            />
            <InputCustome
              label="Email"
              className=""
              inputMode="text"
              type="email"
              color={mailColor}
              onChange={handleEmail}
            />

            <InputCustome
              label="Password"
              className=""
              inputMode="text"
              type="password"
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={onCloseSignup} fullWidth>
              Sign Up
            </Button>
            <Typography
              variant="small"
              className="mt-4 flex justify-center font-chakra"
            >
              Alredy have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold font-chakra"
                onClick={onCloseSignup}
              >
                Sign in
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </div>
  );
}

export default SingupDialog;
