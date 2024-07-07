

import img from './../assets/logo.svg'
function Navbar() {
  return (
    <nav className=' flex justify-between items-center bg-slate-900 px-32 border-b-1 border-black'>
        <div className='flex items-center '>
            <img className='m-4' src={img} alt="" />
            <h1 className='text-white font-bold text-[19px]'>GeekFood</h1>
        </div>
        <div className='flex'>
            <ul className='flex text-white font-semibold'>
                <li className='p-3 cursor-pointer'>Home</li>
                <li className='p-3 cursor-pointer'>Qoutes</li>
                <li className='p-3 cursor-pointer'>Resturants</li>
                <li className='p-3 cursor-pointer'>Foods</li>
                <li className='p-3 cursor-pointer'>Contacts</li>
            </ul>
        </div>
        <div>
            <button className='bg-blue-600 p-1 rounded-lg hover:bg-blue-500 hover:transition hover:duration-500'><span className=' font-semibold text-white m-2'>Get Started</span></button>
        </div>
    </nav>
  )
}

export default Navbar
