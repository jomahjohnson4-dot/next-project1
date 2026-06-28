import React from 'react'
import Logo from '../components/Logo'
import NavTitle from '../components/NavTitle'
import Extra from '../components/Extra'


export default function NavBar() {
  return (
    <div className='flex w-full justify-between h-15 text-lg items-center px-5 bg-black text-white'>
      <Logo></Logo>
      <NavTitle/>
      <Extra/>
    </div>
  )
}
