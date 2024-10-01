import React from 'react'
import Footer from './Footer'
import NavbarPage from './NavbarPage'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <div>
        <NavbarPage/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout