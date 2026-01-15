import React, { Component } from 'react'
import './../css/EducationBox.css';

// A box that contains information about my education
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

                <ul className='Fonts-size'>
                    <li>Key Courses: Data Structures, Algorithms, Web systems, Mobile App, OOP in C++, IoT</li>
                    <li>GPA: 4.04 / 4.33</li>
                    <li>Dean’s list recognition (6x)</li>
                </ul>

                <br/>
            </div>
        )
    }
}