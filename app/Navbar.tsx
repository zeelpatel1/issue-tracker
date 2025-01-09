import Link from 'next/link'
import React from 'react'
import { PiFediverseLogo } from "react-icons/pi";

const Navbar = () => {

    const links=[
        {lable:'Dashboard',href:'/'},
        {lable:'Issues', href:'/issues'}
    ]

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href='/'><PiFediverseLogo /></Link>
        <ul className='flex space-x-6'>
            {links.map((x,i)=>(
                <li key={i}><Link className='text-zinc-300 hover:text-zinc-100 transition-colors' href={x.href}>{x.lable}</Link></li>
            ))}
            
        </ul>
    </nav>
  )
}

export default Navbar
