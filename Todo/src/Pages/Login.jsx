import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import FormControl from "@mui/material/FormControl";

import axios from "../Services/AxiosInstance";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

import "../Styles/Login.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),

    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const Login = () => {
  const inputRef = useRef();

  const navigate = useNavigate();

  const submitHandler = async () => {

      const ref = inputRef.current;
  const email = ref.email.value;
  const password = ref.password.value;
  const body = {
    email,
    password,
  };

  console.log("body -------------",body)
    try {

        const response = await axios.post("/user/login", body);
        console.log( "log in rsponse :",response)

        
        
    } catch (error) {

        console.log(" error:",error)
        
    }
  };

  return (
    <div className="log_main_div">
      <div className="log_form_div">
        <h1 style={{ color: "#fff" }}>Log in</h1>

        <Box
          component="form"
          noValidate
          sx={{
            display: "flex",

            justifyContent: "center",
          }}
          ref={inputRef}
        >
          <FormControl variant="standard">
            <label style={{ marginTop: "10px", color: "#fff" }}>
              Email/Mobile
            </label>
            <BootstrapInput
              sx={{ color: "#B4B4B3" }}
              placeholder="John@gmail.com"
              id="bootstrap-input"
              name="email"
            />

            <label style={{ marginTop: "10px", color: "#fff" }}>
              {" "}
              Password
            </label>
            <BootstrapInput
              sx={{ color: "#B4B4B3" }}
              placeholder="123456789"
              id="bootstrap-input"
              name="password"
            />
          </FormControl>
        </Box>
        <Button
          sx={{ marginTop: "1rem", width: "13rem", backgroundColor: "green" }}
          variant="contained"
          disableElevation
          onClick={submitHandler}
        >
          Log in
        </Button>
        <p
          onClick={() => navigate("/signup")}
          style={{ margin: "1rem", color: "#fff" }}
        >
          Not a member? SignUp
        </p>
      </div>
    </div>
  );
};

export default Login;
