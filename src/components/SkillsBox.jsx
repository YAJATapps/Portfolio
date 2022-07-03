import React, { Component } from 'react'
import './../css/AboutBox.css';

// A box that the list of my skills
export default class SkillsBox extends Component {

    // Render this component
    render() {
        return (
            <div
                className='About-box'>
                <h1 className='About-text'>
                    <ul>
                        <li>Languages: Java, JavaScript, Python (Proficient) <br/>Intermediate: Kotlin, C#, PHP, Swift, C++</li>
                        <li>AWS: Serverless platform, Virtual machines, API gateway, DNS, and Web app deployment</li>
                        <li>Web: React, NodeJS, FastAPI, jQuery, Bootstrap, Ajax, HTML5, CSS</li>
                        <li>Databases: MySQL, MongoDB, Oracle</li>
                        <li>Technologies: Bash, Git, Flutter, Firebase, Google cloud platform and Azure virtual machines</li>
                    </ul>
                </h1>

                <br />
            </div>
        )
    }
}