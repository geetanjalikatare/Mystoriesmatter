import Main from "./components/Main";
import Login from "./components/login/Login";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
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
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
