import { useContext } from "react"
import AuthContext from "./AuthContext"

const MainPage = () => {
    const {username, handleLogIn} = useContext(AuthContext);

    const loggout = () => {
        handleLogIn();
    }

    return(
        <div>
            <h1>Welcome, {username}</h1>
            <button onClick={loggout}>Log out</button>
        </div>
    )
}
export default MainPage