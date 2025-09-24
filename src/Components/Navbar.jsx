import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='w-full h-16 bg-blue-600 text-white flex items-center gap-1.5 px-4'>
        <div className='text-2xl font-bold ml-40'>
<img className='h-5.5' src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" /> <p className='text-xs' >explore <font color="orange"> plus</font> </p></div>
        <div className=''>
            <input type="text" placeholder='Search for products, brands and more' className='px-4 py-2 bg-[#f0f0f0] placeholder-gray-500 rounded w-96 border-0'/>
        </div>
        <div>
            <button className='bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200'>Login</button>
        </div>
        <div className='ml-20 font-bold flex gap-12 '>
            <div> become a seller</div>
            <div>More	⬇</div>
            <div>	🛒 Cart</div>
        </div>
    </div>  
    </>
  )
}

export default Navbar