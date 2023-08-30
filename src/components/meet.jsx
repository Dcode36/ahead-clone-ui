import React from 'react'

const meet = () => {
    return (
        <div className='d-flex justify-content-center align-items-center my-5'>
            <div className="meet-container position-relative">
                <img src="/assets/red.png" alt=""  data-aos="fade-up"
     data-aos-duration="3000"/>
                <img src="/assets/flower.png" alt="" data-aos="fade-right"
     data-aos-duration="3000"/>
                <img src="/assets/numflower.png" alt="" data-aos="fade-down"
     data-aos-duration="3000"/>
                <div className="meet-content "  data-aos="fade-down-right">
                    <p>Built out of frustration</p>
                    <h1>Meet the ahead app</h1>
                </div>

                <p className='meet-box' data-aos="fade-down-left">
                    A personalized pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence.
                    <br /><br />
                    Think of it as a pocket cheerleader towards a better, more fulfilling.
                </p>
                <img src="/assets/1.png" className='meet-img' data-aos="flip-left" alt="" />
                <div className="circle"></div>
            </div>
        </div>
    )
}

export default meet
