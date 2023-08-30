import React from 'react'

const think = () => {
    return (
        <>
            <div className=" d-flex align-items-center justify-content-center">
                <div className="chart-container">
                    <p className='py-5 text-center' data-aos="fade-down">Let you friends, and co-workers (anonymously) rate your social skills.</p>
                    <h1 className='my-2 text-center' data-aos="fade-down">Ever wondered what others think of you?</h1>

                    <div className="numflower-container  my-4 d-flex gap-5 justify-content-center align-items-center" >
                        <div className='num-c d-flex flex-column justify-content-center align-items-center' >
                            <img src="/assets/numflower.png" height="100px" width="100px" alt="" />
                            <p className='text-center' data-aos="fade-up">Answer Questions on your social skills</p>
                        </div>
                        <div className='num-c d-flex flex-column justify-content-center align-items-center' >
                            <img src="/assets/numflower.png" height="100px" width="100px" alt="" />
                            <p className='text-center' data-aos="fade-up">Let Ohters anonymously answer the smae questions about you</p>
                        </div>
                        <div className='num-c d-flex flex-column justify-content-center align-items-center' >
                            <img src="/assets/numflower.png" height="100px" width="100px" alt="" />
                            <p className='text-center' data-aos="fade-up">Find out where you and others see things the smae way -and where not!</p>
                        </div>
                    </div>

                    <img src="/assets/chart.png" data-aos="fade-down" className='chart-img' alt="" />
                </div>
            </div>
        </>
    )
}

export default think
