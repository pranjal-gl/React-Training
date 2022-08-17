import { useState } from "react";
import { useContext } from "react";
import AuthContext from "./AuthContext";

const LogIn = () => {
    const [userN, setUsername] = useState('');
    const [password,setPassword]=useState('')

    const handleChange=(e,key)=>{
        if(key==='username'){
            setUsername(e.target.value)
        }
        if(key==='password'){
            setPassword(e.target.value)
        }
    }

    const authLogin = () => {
        if(password === 'admin') {
            handleLogIn();
            setUsernameFun(userN);
        }
    }

    const {setUsernameFun, handleLogIn} = useContext(AuthContext)

    return(
        <div>
            <h1>Log In</h1>
            Username<input type='text' onChange={(e)=>handleChange(e,"username")}></input>
            Password<input type='text' onChange={(e)=>handleChange(e,"password")}></input>
            <button onClick={authLogin}>login</button>
        </div>
    )
}
export default LogIn