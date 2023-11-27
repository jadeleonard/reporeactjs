import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      

<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
     <ul className='hidden sm:inline-flex gap-4'>
      <li className='text-zinc-400 mx-auto hover:text-blue-400 text-sm transition duration-500'><Link to='/sign-up'>Sign up</Link></li>
      <li className='text-zinc-400 mx-auto hover:text-blue-400 text-sm  transition duration-500'><Link to='/sign-in'>Sign in</Link></li>
      <li className='text-zinc-400 mx-auto hover:text-blue-400 text-sm transition duration-500'><Link to='/dashboard'>Dashboard</Link></li>
      <li className='text-zinc-400 mx-auto hover:text-blue-400 text-sm  transition duration-500'><Link to='/'></Link></li>
     </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
