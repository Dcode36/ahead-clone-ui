import React from 'react'
import Image from 'next/image'
const navbar = () => {
    return (
  
            <nav className=" w-100 bg-white position-fixed top-0 ">
                <div className="logo">
                    <Image
                        src="/assets/logo.png"
                        alt="image"
                        width="100" height="100"
                    />

                </div>

                <ul className=' my-3  '>
                    <li><a href="" >Emotions</a></li>
                    <li><a href="">Manifesto</a></li>
                    <li><a href="">Self-awareness test</a></li>
                    <li><a href="">Work With Us</a></li>
                </ul>

                <div className="cto-download-btn">
                    <button className='px-4 py-2 rounded-pill bg-black text-white outline-none border-none'>Download App</button>
                </div>
            </nav>
      
    )
}

export default navbar
