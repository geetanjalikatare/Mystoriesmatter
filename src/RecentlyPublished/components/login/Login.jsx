import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { LoginApi } from "../../../api/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const obj = {
    emailId: email,
    password: password,
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
   LoginApi(obj)
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  };
  return (
    <Box
      style={{
        border: "1px solid black",
        padding: "10px",
        width: "400px",
        height: "400px",
        marginLeft: "30%",
        marginTop: "120px",
        textAlign: "center",
      }}
    >
      <h1>Login Page</h1>
      <TextField
        label="Email"
        style={{ width: "300px", marginTop: "20px" }}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></TextField>
      <TextField
        label="Password"
        type="password"
        style={{ marginTop: "20px", width: "300px" }}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></TextField>
      <br></br>

      <Button
        variant="contained"
        style={{ marginTop: "10px" }}
        onClick={handleSubmit}
      >
        Submit{" "}
      </Button>
    </Box>
  );
};
export default Login;
