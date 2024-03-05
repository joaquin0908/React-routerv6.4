import { NavLink } from "react-router-dom"
import { useUserContext } from "../context/UserContext";

const NavBar = () => { 
  
  const {user, setUser} = useUserContext();

 
  return(
  <nav>
    <NavLink to="/">Home</NavLink>
   {
    user && (
      <>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <button onClick={() => setUser(false)}>Log Out</button>
      </>
    )
   }
  
  </nav>
 ); 
};

export default NavBar;