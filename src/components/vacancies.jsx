import React from 'react'

const vacancies = () => {
    return (
        <>
            <div className="vacancies-container">
                <h1 className='m-5 fw-bold' data-aos="fade-right">Open Vacancies</h1>

                <div className="vacancies-card-cont d-flex gap-2 flex-wrap justify-content-evenly align-items-center">
                    <div className="vac-card">
                        <div className="fs-4 fw-bold m-4">Senior Full-Stack Enginner</div>
                        <ul className='fs-5 m-3'>
                            <li>Full time position</li>
                            <li>Barlin or remote</li>
                            <li>€65k-85k, 0.5-1.50% equity share options</li>
                        </ul>
                        <a href="" className=' m-4 px-4  py-2 text-decoration-none bg-dark text-white rounded-pill'>see details</a>
                    </div>
                    <div className="vac-card">
                        <div className="fs-4 fw-bold m-4">Senior Desginer</div>
                        <ul className='fs-5 m-3'>
                            <li>Full time position</li>
                            <li>Barlin or remote</li>
                            <li>€65k-85k, 0.5-1.50% equity share options</li>
                        </ul>
                        <a href="" className=' m-4 px-4  py-2 text-decoration-none bg-dark text-white rounded-pill'>see details</a>
                    </div>
                    <div className="vac-card">
                        <div className="fs-4 fw-bold m-4">Superstar Intern</div>
                        <ul className='fs-5 m-3'>
                            <li>Full time position</li>
                            <li>Barlin or remote</li>
                            <li>€65k-85k, 0.5-1.50% equity share options</li>
                        </ul>
                        <a href="" className=' m-4 px-4  py-2 text-decoration-none bg-dark text-white rounded-pill'>see details</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default vacancies
