import Main from "./RecentlyPublished/components/Main"
import Login from "./RecentlyPublished/components/login/Login";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import Home from "./Home/components/Home";
function App() {
  const navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem("token")){
      navigate("/main")
    }else{
      navigate("/login")
    }
      },[])
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/main" element={<Main />} />
        
      </Routes>
    </>
  );
}

export default App;
