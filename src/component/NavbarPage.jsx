import React from 'react'
import { Link } from 'react-router-dom'

const NavbarPage = () => {
  return (
    <div>
        <div>
        <nav className='h-24 bg-gradient-to-r from-blue-700 to-slate-600 flex items-center gap-4 font-semibold justify-between px-10 text-3xl'>
            <Link to="/">Dreamway Travells</Link>
            <div className="flex gap-6">
            <Link to="/admin">Admin</Link>
            <Link to="/about">About</Link>
            <Link to="/explore">Explore</Link>
            <Link to="/planPage">PlanPage</Link>
            </div>
        </nav>
        </div>
    </div>
  )
}

export default NavbarPage