import { useNavigate } from "react-router-dom";
import { UserKey } from "../../redux/states/user";
import { clearLocalStorage } from "../../utilities"

function Logout() {

  const navigate = useNavigate();

  const logout = () =>{
    clearLocalStorage(UserKey);
    navigate('/');
  }

  return (
    <button onClick={logout} >Log out</button>
  )
}
export default Logout