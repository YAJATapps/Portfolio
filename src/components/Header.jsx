import React, { Component } from 'react'
import './../css/Header.css';

// The header with icon and text
export default class Header extends Component {

    // Render this component
    render() {
        return (
            <header
                className='App-header'>
                <div
                    className='Scroll-container Div-center'>
                    <a
                        className='Button-scroll'
                        href='#AboutScroll'>
                        About
                    </a>
                    <a
                        className='Button-scroll'
                        href='#EducationScroll'>
                        Education
                    </a>
                    <a
                        className='Button-scroll'
                        href='#ProjectsScroll'>
                        Projects
                    </a>
                    <a
                        className='Button-scroll'
                        href='#SkillsScroll'>
                        Skills
                    </a>
                </div>

                <div
                    className='Header-container'>
                    <div>
                        <h1
                            className='Div-center'>
                            YAJAT<br />KUMAR
                        </h1>
                        <h2
                            className='Title-name'>
                            Network Software Engineer at Ciena
                        </h2>
                        <div
                            className='Div-center'>
                            <a
                                className='Button'
                                href='https://github.com/YAJATapps/Portfolio/raw/main/assets/Yajat_Kumar-Resume.pdf'
                                target='_blank'
                                rel='noopener noreferrer'>
                                Download Resume
                            </a> 
                            <a
                                className='Button'
                                href='https://www.linkedin.com/in/yajatkumar/'
                                target='_blank'
                                rel='noopener noreferrer'>
                                View LinkedIn
                            </a>
                        </div>
                        <br></br>
                        <div
                            className='Div-center'>
                            <a
                                className='Button'
                                href='https://blogs.yajatkumar.com'
                                target='_blank'
                                rel='noopener noreferrer'>
                                View Blogs
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }

}
