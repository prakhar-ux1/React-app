import React from 'react'
import "../styles/About.scss"
function About() {

    const companies = [{
        name: 'Tektronix(merged with Telestream)Under a Fortune 500 company: Fortive',
        jobTitle: 'UI/UX Developer',
        responisbilities: `Develop UI of embedded App which runs on touch panel Instrument, Browser & Monitor. 
        Features, Bug fixes, Wireframes, UI improvements, pull requests approvals`,
        duration: 'June 2019- Present'

    }, {
        name: 'Wishbook Info services Pvt Ltd',
        jobTitle: 'Frontend developer',
        responisbilities: `Develop UI of embedded App which runs on touch panel Instrument, Browser & Monitor. 
        Features, Bug fixes, Wireframes, UI improvements, pull requests approvals`,
        duration: 'May 2018 to June 2019'

    }, {
        name: 'Infosys Limited',
        jobTitle: 'System Engineer',
        responisbilities: `Training on Python & JavaScript, Assignments, Test.`,
        duration: 'Dec 2017 to January 2018'
    }]
    return (
        <div className='mainContainer'>
            <div className='header'>
                <span className='owner_name'>Prakhar</span>
                <span>Linkden:prakhar123121.com</span>
            </div>
            <div className='intro'>
                <h3 className=' sub_title intro_heading'>Brief Intro</h3>
                <p >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt distinctio, laboriosam eius expedita similique modi non eaque explicabo iste. Suscipit doloremque officia reiciendis eveniet magnam ipsum ipsam eaque assumenda tempora, odit impedit optio, eos a! Harum temporibus autem amet nemo est quisquam, soluta modi id! Doloribus est quidem explicabo quia!
                </p>
            </div>
            <div className='experience'>
                <h3 className='sub_title'>Professional Experience</h3>
                <table className='experience_table'>
                    <tbody>
                        <tr id="heading">
                            <th>Company Name </th>
                            <th>Designation </th>
                            <th>Responsibilities</th>
                            <th>Duration</th>
                        </tr>
                        {companies.map((company, i) => (
                            <tr key={i}>
                                <td>{company.name} </td>
                                <td>{company.jobTitle} </td>
                                <td>{company.responisbilities}</td>
                                <td>{company.duration}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='skills'>
                <h3 className='sub_title'>Technical Skills</h3>
                <div>
                    <ul>
                        <li>
                            <span className="course-name">FrontEnd :</span>
                            JavaScript, React Js, Redux,
                        </li>
                        <li>
                            <span className="course-name">Backend :</span> Asp.net with c#, J2EE,

                        </li>
                        <li>
                            <span className="course-name">Database:</span> : sql, MySQL
                        </li>
                        <li>
                            <span className="course-name">Language-</span>  c,c++, Python
                        </li>
                    </ul>
                </div>
            </div>
            <div className='projects'>
                <h3 className='sub_title'>Projects</h3>
                <div>
                    <ul>
                        <li>
                            <span className="course-name">PRISM waveform monitor</span><br />
                            media monitoring & analysis platform(H/W+S/W) for live SDI, IP signals used by video engineers while production, edit & broadcast
                        </li>
                        <li>
                            <span className="course-name">Wishbook Wholesale App</span><br />
                            is an online Indian marketplace where textile Manufacturers and Wholesalers sell their products,
                            while Resellers and Retailers purchase them.iOS App & Mobile browser app (Cordova+onsen+AngularJS)
                        </li>
                        <li>
                            <span className="course-name">Wishbook Seller/admin panel </span><br />
                            (web Application: AngularJS, AngularDatatablesv0.6x)
                        </li>
                        <li>
                            <span className="course-name">Character Recognizer using KNN </span><br />
                            (python-Window Apppublished paper in IEEE Bangkok Conference 2017 - my work with name on Google search )
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default About