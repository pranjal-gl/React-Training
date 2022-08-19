import ThemeContext from "./ThemeContext";
import { useContext } from "react";
import './Dashboard.css'
const Dashboard = () => {
    const {theme, themeChange} = useContext(ThemeContext);
    console.log(theme);
    return(
        <div className={theme}>
            <button onClick={themeChange}>Change theme</button>
            <h1>Dashboard</h1>
        </div>
    )
}

export default Dashboard