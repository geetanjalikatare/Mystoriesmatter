import Main from "./RecentlyPublished/components/Main"
import Login from "./RecentlyPublished/components/login/Login";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import Home from "./Home/components/Home";
import { Box } from "@mui/material";
function App() {
  const navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem("token")){
      navigate("/home")
    }else{
      navigate("/login")
    }
      },[]);

  return (
    <Box style={{width:"100%"}}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/main" element={<Main />} />
      </Routes>
     
    </Box>
  );
}

export default App;
