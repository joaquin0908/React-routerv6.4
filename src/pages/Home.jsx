import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Home = () => { 
   const {setUser} = useUserContext();
   const navigate = useNavigate();  
    
   const handelLogin = () => { 
    setUser({
        name: "polo",
        email:"polo@gmail.com"
    });
    navigate("/dashboard")
    }
    return (
    <>
    <h1>Home </h1>
    <button onClick={handelLogin}>Login</button>
    </>
     );  
    };

export default Home;