import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { LoginApi } from "../../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { LoginAsync, selectLoginResponse, selectStatus } from "../../../Redux/reducers/LoginSlice";
import { CircularProgress } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const result = useSelector(selectLoginResponse);
  const status = useSelector(selectStatus)
  const obj = {
    emailId: email,
    password: password,
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginAsync(obj))
  };
  useEffect(() => {
    if (result.ResponseCode === 200) {
      localStorage.setItem("token", result.Response.UserAuthToken);
      navigate("/home")
    }
  }, [result])

  return (
    <>
      <center>
        <p style={{ paddingTop: "5%", color: "red" }}>{status === "loading" ? <CircularProgress /> : result.ResponseMessage}</p>
        <Box
          style={{
            border: "1px solid black",
            width: "400px",
            height: "400px",
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
        </Box></center>
    </>

  );
};
export default Login;
