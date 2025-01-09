"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { PiFediverseLogo } from "react-icons/pi";
import classNames from 'classnames';

const Navbar = () => {

    const currentPath=usePathname();
    console.log(currentPath)

    const links=[
        {lable:'Dashboard',href:'/'},
        {lable:'Issues', href:'/issues'}
    ]

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href='/'><PiFediverseLogo /></Link>
        <ul className='flex space-x-6'>
            {links.map((x,i)=>(
                <li key={i}><Link className={classNames({
                    'text-zinc-200':x.href===currentPath,
                    'text-zinc-500':x.href!==currentPath,
                    'hover:text-zinc-300 transition-colors':true
                })} href={x.href}>{x.lable}</Link></li>
            ))}
            
        </ul>
    </nav>
  )
}

export default Navbar
