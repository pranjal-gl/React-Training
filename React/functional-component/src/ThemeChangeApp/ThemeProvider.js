import { useState } from 'react';
import ThemeContext from './ThemeContext';
import Dashboard from './Dashboard';
const ThemeProvider = () => {
    const [currTheme, setCurrTheme] = useState("light");
    const themeChangeHandler = () => {
        if(currTheme == 'light') {
            setCurrTheme('dark');
        }
        else {
            setCurrTheme('light')
        }
    }
    return(
        <div>
            <ThemeContext.Provider value={{theme: currTheme, themeChange: themeChangeHandler}}>
                <Dashboard></Dashboard>
            </ThemeContext.Provider>
        </div>
    )
}
export default ThemeProvider