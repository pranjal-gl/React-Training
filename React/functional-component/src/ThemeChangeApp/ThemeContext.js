import { createContext } from "react";

const ThemeContext = createContext({theme: null, themeChange: ()=>{}});
export default ThemeContext;