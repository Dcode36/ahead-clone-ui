import React from 'react'

const callToaction = () => {
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center flex-column cto-container text-center my-5 py-5">

                <p className='py-3' >We take Privacy seriously</p>
                <h2 className='fw-bold'>Before you get started</h2>
                <p className='fs-3 w-50 text-center fw-lighter'>"We won't share your answers with anyone (and won't ever tell you which friends said what about you)"</p>

                <p className='fw-bold' data-aos="fade-up">with love, <span className='fs-1 '><i className='sign'>Team ahead</i></span></p>
                <a href="" data-aos="fade-up" className='px-4 my-4 py-2 text-decoration-none bg-dark text-white rounded-pill'>start a test</a>
                <p className='my-3' data-aos="fade-up">take only 5 minutes</p>
            </div>
        </>
    )
}

export default callToaction
