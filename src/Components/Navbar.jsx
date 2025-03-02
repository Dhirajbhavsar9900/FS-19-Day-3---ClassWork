import img from './../assets/logo.svg'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='flex flex-col md:flex-row justify-between items-center bg-slate-900 px-5 md:px-10 lg:px-32 border-b border-black'>
      <div className='flex items-center'>
        <img className='m-2 md:m-4 w-10 h-10' src={img} alt="Logo" />
        <h1 className='text-white font-bold text-xl md:text-[19px]'>GeekFood</h1>
      </div>
      <div className='flex flex-col md:flex-row items-center'>
        <ul className='flex flex-col md:flex-row text-white font-semibold'>
          <li className='p-2 md:p-3 cursor-pointer'><NavLink to="/">Home</NavLink></li>
          <li className='p-2 md:p-3 cursor-pointer'><NavLink to="qoute">Quote</NavLink></li>
          <li className='p-2 md:p-3 cursor-pointer'><NavLink to="restaurents">Resturants</NavLink></li>
          <li className='p-2 md:p-3 cursor-pointer'><NavLink to="foods">Foods</NavLink></li>
          <li className='p-2 md:p-3 cursor-pointer'><NavLink to="contacts">Contacts</NavLink></li>
        </ul>
      </div>
      <div className='mt-2 md:mt-0'>
        <button className='bg-blue-600 py-1 px-3 rounded-lg hover:bg-blue-500 transition duration-500'>
          <span className='font-semibold text-white'>Get Started</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
