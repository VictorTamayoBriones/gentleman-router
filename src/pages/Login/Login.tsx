import { useDispatch } from "react-redux";
import { getMorty } from "../../service"
import { createUser } from '../../redux/states/user';

function Login() {

  const dispatch = useDispatch();
  
  const login = async () =>{
    try{
      const result = await getMorty();
      dispatch(createUser(result))
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