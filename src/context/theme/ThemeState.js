import react, { useState } from "react"
import ThemeContext from "./ThemeContext";

const ThemeState = (props)=>{
  
  const [theme,setTheme] =useState("dark")
   
  const toogleTheme = ()=>{
    if(theme==="light") setTheme("dark")
    else setTheme("light")
  }

    return (
        <ThemeContext.Provider value={{theme,toogleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeState;
