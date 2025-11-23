import React, { createContext, useState } from 'react'
//create kar diya context koh
export const ThemeDataContext = createContext() // bhr bhj rahe taki koi bhe use kar sake

const ThemeContext = (props) => {
   
  const [theme, setTheme] = useState('light')


  return (
    <div>
    {/* // provide kar diya content */}
      <ThemeDataContext.Provider value={[theme, setTheme]}> 
        {props.children}
      </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContext
