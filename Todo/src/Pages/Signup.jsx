import "../Styles/Signup.css";

import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import FormControl from "@mui/material/FormControl";

import axios from "../Services/AxiosInstance";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const inputRef = useRef();
  const navigate =useNavigate()

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

  const submitHAndler = () => {
    const ref = inputRef.current;

    const name = ref.name.value;
    const fathername = ref.fatherName.value;
    const email = ref.email.value;
    const phoneNumber = ref.phoneNumber.value;
    const password = ref.password.value;

   
    const formdata = {
      name,
      fathername,
      email,
      phoneNumber,
      password,
    };

    try {
      const response = axios.post("/user/registraion", formdata);

      console.log(" response", response);
    } catch (error) {
      console.log("error :", error);
    }
  };

  return (
    <div className="main_div">
      <div className="form_div">
        <h1 style={{ color: "#fff" }}>Sign Up</h1>
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
            <label style={{ marginTop: "10px", color: "#fff" }}>Name</label>
            <BootstrapInput
              sx={{ color: "#B4B4B3" }}
              placeholder="John"
              id="bootstrap-input"
              name="name"
            />
            <label style={{ marginTop: "10px", color: "#fff" }}>
              {" "}
              Father Name
            </label>
            <BootstrapInput
              sx={{ color: "#B4B4B3" }}
              placeholder="John"
              id="bootstrap-input"
              name="fatherName"
            />
            <label style={{ marginTop: "10px", color: "#fff" }}> Email</label>
            <BootstrapInput
              sx={{ color: "#B4B4B3" }}
              placeholder="Doe"
              id="bootstrap-input"
              name="email"
            />
            <label
              style={{ marginTop: "10px", color: "#fff", marginBottom: "1rem" }}
            >
              {" "}
              Phone Number :
            </label>
            <Box>
              <BootstrapInput
                sx={{ color: "#B4B4B3", width: "3.5rem", marginRight: "2rem" }}
                placeholder="+91"
                id="bootstrap-input"
              />
              <BootstrapInput
                sx={{ color: "#B4B4B3" }}
                placeholder="123456789"
                id="bootstrap-input"
                name="phoneNumber"
              />
            </Box>
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
          onClick={submitHAndler}
          sx={{ marginTop: "1rem", width: "20rem", backgroundColor: "green" }}
          variant="contained"
          disableElevation
        >
          Sign UP
        </Button>
        <p onClick={()=>navigate('/login')} style={{ margin: "1rem", color: "#fff" }}>Already a member? Login</p>
      </div>
    </div>
  );
};

export default Signup;
