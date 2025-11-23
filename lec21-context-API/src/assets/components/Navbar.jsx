import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../../context/ThemeContext'


const Navbar = () => {
//direct children koh print karane keh liye we can use that...known as destructuring
// const Navbar =({chidren})=()=>{ same as it is then we dont have to right props . we can directly acess children}
   
  const [theme] = useContext(ThemeDataContext)
  return (
    <div className= {theme}>
      <h2>Tamannah</h2>
      
      <Nav2 />
    </div>
  )
}

export default Navbar
