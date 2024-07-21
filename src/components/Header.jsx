import React from 'react'
import foodie_logo from "../assets/logo.png"


function Header() {
  return (
    <nav className='flex justify-between px-4 py-3 items-center'>

        <div >
            <img className='h-8 w-20' src={foodie_logo}></img>
        </div>

        <div>
          <button className='.btn bg-orange-500 text-white px-5 py-2 rounded-3xl'>Join the Waitlist</button>
        </div>
    </nav>
  )
}

export default Header