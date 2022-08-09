import { useState } from "react"
import Dashboard from "./Dashboard";
import SignIn from "./SignIn";
const Parent = (props) => {
    const [isLoggedIn, setLogin] = useState(false);

    const toggleUser = () => {
        setLogin(!isLoggedIn)
    }

    // console.log('called');
    return(
        <div>
            {
                isLoggedIn ? 
                <Dashboard toggleFun={toggleUser}></Dashboard> : 
                <SignIn toggleFun={toggleUser}></SignIn>
            }
        </div>
    )
}

export default Parent