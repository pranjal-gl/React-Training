import { useState } from "react";
import AuthContext from "./AuthContext";
import LogIn from "./LogIn";
import MainPage from "./MainPage";

const AuthProvider = () => {
    const [isLogIn, setLogin] = useState(false);
    const [userN, setUserN] = useState('');

    const setUsernameFun = (key) => {
        setUserN(key);
    }

    const handleLogIn=()=> {
        setLogin(!isLogIn);
    }

    return(
        <div>
            <AuthContext.Provider value={{username: userN, setUsernameFun: setUsernameFun, handleLogIn: handleLogIn}}>
            {
                isLogIn ? <MainPage></MainPage> : <LogIn></LogIn>
            }
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider