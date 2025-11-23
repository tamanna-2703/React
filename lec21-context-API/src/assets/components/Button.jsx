import React, { useContext } from 'react'
import { ThemeDataContext } from '../../context/ThemeContext'

const Button = () => {

    const [Theme, setTheme] = useContext(ThemeDataContext)

    const ChangeTheme=()=>{
        setTheme('dark')
        
    }
  return (
    <div>
      <button onClick={ChangeTheme}> 
      Change Button
      </button>  
      </div>
  )
}

export default Button
