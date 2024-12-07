import React from 'react'

export default function Header() {
  return (
    <div className='bg-gray-400 p-4 '>
      <div className='bg-yellow-500 mx-auto flex justify-between items-center w-[95%] 2xl:w-[1440px]'>
        <h1 className='m-2'>LOGO</h1>
        <ul className='flex gap-5 m-2'>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          <li>Projects</li>
        </ul>
      </div>
    </div>
  )
}
