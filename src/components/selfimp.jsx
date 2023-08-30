import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const selfimp = () => {
    return (
        <>
            <div className='d-flex flex-column '>
                <div className="timeline-content ">
                    <p className="fw-bold ">Wrong with self-improvement & how we're fixing it.</p>
                    <h1  data-aos="fade-right">Self-improvement. Ugh. </h1>
                </div>


                <VerticalTimeline
                    layout='1-column-left'
                    lineColor='#6543EF'
                    className='ver-time'
                >
                    <VerticalTimelineElement
                        className=''
                        iconStyle={{ background: '#6543EF', color: '#fff' }}
                        contentStyle={{ boxShadow: "none" }}
                    >
                        <h2 className='fw-bold '>It's not as easy as 1-2-3</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore molestiae ad ullam possimus, magnam libero odio at tempore quae incidunt atque corporis, rem?</p>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className=''
                        iconStyle={{ background: '#6543EF', color: '#fff' }}
                        contentStyle={{ boxShadow: "none" }}
                    >
                        <h2 className='fw-bold '>Old habits are hard to break</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore molestiae ad ullam possimus, magnam libero odio at tempore quae incidunt atque corporis, rem?</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className=''
                        iconStyle={{ background: '#6543EF', color: '#fff' }}
                        contentStyle={{ boxShadow: "none" }}
                    >
                        <h2 className='fw-bold '>You and you motivation dont't have a long-term relationships</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore molestiae ad ullam possimus, magnam libero odio at tempore quae incidunt atque corporis, rem?</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className=''
                        iconStyle={{ background: '#6543EF', color: '#fff' }}
                        contentStyle={{ boxShadow: "none" }}
                    >
                        <h2 className='fw-bold '>Books just don't offer practical solutions</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore molestiae ad ullam possimus, magnam libero odio at tempore quae incidunt atque corporis, rem?</p>
                    </VerticalTimelineElement>

                </VerticalTimeline>

            </div>
            <div className='d-flex  algin-items-between justify-content-between flex-wrap hero-bottom'>
                <h3 className='fw-bold '>Be the best you with EQ</h3>
                <div className='d-flex gap-5 algin-items-center justify-content-evenly text-box '>
                    <p>Not having you own emotions under control might be holding you back</p>


                    <p>Additionally, not understanding those of others stops you from being parent, friend you can be.</p>
                </div>
            </div>
        </>

    )
}

export default selfimp
