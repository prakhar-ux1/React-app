import React, { useRef } from 'react'
import jsPDF from 'jspdf';
import "../styles/About.scss"
import html2canvas from 'html2canvas';

function About() {
    const pdfRef = useRef(null);
    const handlepdf = () => {
        const Component = document.getElementById('maincv')
        const componentWidth = Component.offsetWidth
        const componentHeight = Component.offsetHeight
        html2canvas(Component).then((canvas) => {
            const orientation = componentWidth >= componentHeight ? 'l' : 'p'

            const imgData = canvas.toDataURL('image/png')
            const pdf = new jsPDF({
                orientation,
                unit: 'px'
            })
            pdf.internal.pageSize.width = componentWidth;
            pdf.internal.pageSize.height = componentHeight;
            pdf.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight)
            pdf.save('download.pdf')
        })




        // const input = document.getElementById('maincv');
        // let inputDiv_Width = 800;
        // //input.offsetWidth;
        // let inputDiv_Height = 1012;
        // //input.offsetHeight;
        // console.log(inputDiv_Width, inputDiv_Height);

        // let ratio = inputDiv_Height / inputDiv_Width;
        // html2canvas(input, { height: inputDiv_Height, width: inputDiv_Width })
        //     .then((canvas) => {
        //         const imgData = canvas.toDataURL('image/png');
        //         const pdf = new jsPDF();
        //         let width = pdf.internal.pageSize.getWidth();
        //         let height = pdf.internal.pageSize.getHeight();
        //         height = ratio * width;
        //         pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
        //         pdf.save("download.pdf");
        //     })
    }
    const skills = ["Html", "Css", "Javascript", "React", "C++", "Data Structure", "DBMS", "MySql", "Java", "Machine Learning", "Python", "Data analysis"]
    return (
        <>
            <div id='maincv' className='mainContainer' ref={pdfRef}>
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
            <button className='btn_pdf' onClick={handlepdf}>Generate PDF</button>
        </>
    )
}

export default About