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
                        <li>Systems: C, C++, Linux, concurrency, distributed systems, networking, and performance engineering</li>
                        <li>Android and embedded: Java, Kotlin, AOSP, GKI, device trees, kernels, drivers, and Mesa/Panfrost</li>
                        <li>AI and automation: Python, Docker, GDB, packet analysis, LLM integration, and test automation</li>
                        <li>Web and product: JavaScript, React, NodeJS, FastAPI, PHP, MySQL, MongoDB, and REST APIs</li>
                        <li>Cloud: AWS, serverless platforms, virtual machines, API Gateway, DNS, and web app deployment</li>
                    </ul>
                </h1>

                <br />
            </div>
        )
    }
}