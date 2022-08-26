import { useDispatch } from "react-redux";
import { getMorty } from "../../service"
import { createUser } from '../../redux/states/user';
import { useNavigate } from "react-router-dom";

function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async () =>{
    try{
      const result = await getMorty();
      dispatch(createUser(result))
      navigate('/private');
    }catch(err){}
  }

  return (
    <>
      <div>Hola este es el Login</div>
      <button onClick={login} >Login</button>
    </>
  )
}

export default Login