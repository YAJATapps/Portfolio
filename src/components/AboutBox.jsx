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
                    Graduated with a degree in Bachelor of Computing Science from Thompson Rivers University - Dec 2022. <br />
                    I work on the development of distributed control-plane software. <br />
                    I have experience with android mobile app development and web development. <br />
                    My app <a href="https://play.google.com/store/apps/details?id=com.pearlauncher.pearlauncher">Pear Launcher</a> has 1M+ installs • 25K+ active users. <br />
                    My open source projects are hosted on my <a href="https://github.com/YAJATapps"> GitHub</a>  repository. <br />
                </h1>

                <br />
            </div>
        )
    }
}