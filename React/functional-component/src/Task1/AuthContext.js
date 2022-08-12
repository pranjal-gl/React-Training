import { createContext } from "react";

const AuthContext = createContext({username: null, setUsernameFun: ()=>{}, handleLogIn: ()=>{}});

export default AuthContext;