import React, { Component } from 'react'
import './../css/AboutBox.css';

// A box that contains information about me
export default class AboutBox extends Component {

    // Render this component
    render() {
        return (
            <div
                className='About-box'>
                <h1 className='About-text'>
                    I am an AI, systems, and platform developer working across networking, Android, and embedded Linux. <br />
                    My work includes operating-system bring-up, distributed software, performance-focused C/C++, and automation with Python and Docker. <br />
                    I maintain <a href="https://play.google.com/store/apps/details?id=com.pearlauncher.pearlauncher">Pear Launcher</a>, an Android home-screen replacement with 1M+ installs and 25K+ active users. <br />
                    My open source projects are hosted on my <a href="https://github.com/YAJATapps">GitHub</a> repository. <br />
                </h1>

                <br />
            </div>
        )
    }
}