import React from 'react'

const footer = () => {
    return (
        <>
            <hr />
            <div className="d-flex justify-content-center align-items-center flex-column footer-container">
                <img src="/assets/logo.png" alt="" />
                <h4 className='text-center fw-bold text-purple-600'>ahead</h4>

                <div className="my-5 d-flex justify-content-evenly flex-wrap  gap-12">
                    <p className='fw-bold mx-5'><i class="bi bi-geo-alt-fill"></i> Street 101, 26,11010 Berlin</p>
                    <p className='fw-bold'><i class="bi bi-envelope-fill"></i> kadamdigvijay36@gmail.com</p>

                </div>
                <button className='px-3 my-4 py-1 text-sm rounded bg-black text-white outline-none border-none d-flex justify-content-center align-items-center'> <i class="bi bi-apple fs-4"></i><span className='spany mx-2'>Download on the <br /> <b>App Store</b></span> </button>

                <p>© 2022 Ahead app. All rights reserved</p>
            </div>
        </>
    )
}

export default footer
