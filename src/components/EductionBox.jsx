import React, { Component } from 'react'
import './../css/EducationBox.css';

// A project box that contains project image, description and link buttons
export default class EducationBox extends Component {

    // Render this component
    render() {
        return (
            <div
                className='Education-box'>
                <div className='Uni-box'>
                    <h1 className='Left-text'>Thompson Rivers University</h1>
                    <h1 className='Right-text'>Sept 2019-Dec 2022</h1>
                </div>
                <div className='Degree-box'>
                    <h1 className='Right-text'>Bachelor of Computing Science</h1>
                </div>

                <ul>
                    <li>Key Courses: Data Structures, Algorithms, Web systems, Mobile App, OOP in C++</li>
                    <li>GPA: 4 (on 4.33 scale)</li>
                    <li>Dean’s list recognition (4 times)</li>
                </ul>

                <br/>
            </div>
        )
    }
}