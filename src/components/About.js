import React from 'react'
import "../styles/About.scss"
function SkillItem({ data }) {
    return (<span className='skill_item'>{data}</span>)
}
function About() {
    const skills = ["Html", "Css", "Javascript", "React", "C++", "Data Structure", "DBMS", "MySql", "Java", "Machine Learning", "Python", "Data analysis"]
    return (
        <div className='mainContainer'>
            <div className='header'>
                <span className='owner_name'>Prakhar Gupta</span>
                <span>Software Engineer</span>
            </div>
            <div className='intro'>
                <h3 className=' sub_title intro_heading'>Brief Intro</h3>
                <p >
                    Keen learner to solve technical issues by debugging programs and tasks. Enthusiastic developer for ML, Hardworking and effective, looking to excel with an organization to solve real world problems.
                </p>
            </div>
            <div className='contactDetail'>
                <ul className='contactDetail_list'>
                    <li>
                        <i className="fa fa-envelope" aria-hidden="true"></i> prakharg689@gmail.com
                    </li>
                    <li>
                        <i className="fa fa-map-marker" aria-hidden="true"></i> Jhansi
                    </li>
                    <li>
                        <i className="fa fa-github" aria-hidden="true"></i> github.com/prakhar-ux1
                    </li>
                    <li>
                        <i className="fa fa-mobile" aria-hidden="true"></i> 1234567890
                    </li>
                    <li>
                        <i className="fa fa-linkedin" aria-hidden="true"></i> <span>linkedin.com/in/prakhargupta770</span>
                    </li>
                </ul>

            </div>
            <div className='experience'>
                <h3 className='sub_title'>Professional Experience</h3>
                <table className='experience_table'>

                    <thead>
                        <tr id="heading">
                            <th>Company Name </th>
                            <th>Designation </th>
                            <th>Responsibilities</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={1}>
                            <td>Siemens Technology</td>
                            <td>Software Developer Intern </td>
                            <td>Test migration from Image Based to Model Based</td>
                            <td>01/2021 - 06/2021,</td>
                        </tr>
                        <tr key={2}>
                            <td>Byjus</td>
                            <td>Software Developer </td>
                            <td>quality Assurance and Frontend developer</td>
                            <td>08/2022-Current</td>
                        </tr>
                        <tr key={3}>
                            <td>Siemens Technology</td>
                            <td>Software Developer Intern </td>
                            <td>Test migration from Image Based to Model Based</td>
                            <td>01/2021 - 06/2021,</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='skills'>
                <h3 className='sub_title'>Skills</h3>
                <div className='skills_list'>
                    {
                        skills.map((element) => {
                            return (<span className='skill_item'>{element}</span>);
                        })
                    }
                </div>
            </div>
            <div className='projects'>
                <h3 className='sub_title'>Projects</h3>
                <div className='projects_list'>
                    <ul>
                        <li>
                            <div className="project_name">QUAKE REPORT ANDROID APP</div>
                            <span>- Fetching data from USGS server about earthquake happened recently</span>
                        </li>
                        <li>
                            <div className="project_name">Book Search APP</div>
                            <span>- A book search app with review system where you can type a key, based on your key All books are represented in recycler view in an app where u
                                view its price, review, author, publisher etc... I am using google book API
                                to get data from server using http connection code using java Expense Tracker APP</span>
                        </li>
                        <li>
                            <div className="project_name">Expense Tracker App</div>
                            <span>- A Simple expense tracker implemented using Room persistence library (database Design)</span>
                        </li>
                        <li>
                            <div className="project_name">DIGITAL IMAGE PROCCESING</div>
                            <span>- Build a model which detect digits from images and use these digits to
                                perform arithmetic operation.</span>
                        </li>
                    </ul>
                </div>
            </div>

        </div >
    )
}

export default About