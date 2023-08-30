import React from 'react';
import Image from 'next/image'
const hero = () => {

    return (
        <>
            <div className='d-flex justify-content-center align-items-center position-relative overflow-hidden hero-section'>
                <img src="/assets/1.png" alt=""  className='position-absolute  moods ' />
                <img src="/assets/2.png" alt="" className='position-absolute moods' />
                <img src="/assets/1.png" alt="" className='position-absolute moods' />
               
                <div className="hero-container   d-flex align-items-center justify-content-center overflow-hidden">
                    <div className="hero-content m-5 animate__animated animate__bounceInLeft">
                        <p>Ahead app</p>
                        <h1>Master your life by mastering emotions</h1>

                        <div className="cto-btn d-flex flex-wrap  gap-6 align-items-center my-2">
                            <button className='px-3 py-1 text-sm w-xs-100  rounded bg-black text-white outline-none border-none d-flex justify-content-center align-items-center'> <i class="bi bi-apple fs-4"></i><span className='spany mx-2'>Download on the <br /> <b>App Store</b></span> </button>
                            <div>
                                <div className="stars text-yellow-400 m-2">

                                    <i className="bi bi-star-fill " />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <p className='text-dark'>100+ AppStore reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-img m-5 animate__animated animate__zoomIn">
                        <img src="/assets/mobile.svg" alt="" />
                    </div>
                </div>
            </div>
            {/* hero section bottom */}
            <div className='d-flex  algin-items-between justify-content-between flex-wrap hero-bottom'>
                <h3 className='fw-bold '>EQ Beats IQ</h3>
                <div className='d-flex gap-5 algin-items-center justify-content-evenly text-box '>
                    <p>People with high emotional intelligence (EQ) live more fulfullied lives. They tend to be happier and have healthier relationships.</p>


                    <p>They are more succesfull in there pursuits and make for inspiring leaders. According to science they earn $29k a year.</p>
                </div>
            </div>
        </>

    )
}

export default hero
