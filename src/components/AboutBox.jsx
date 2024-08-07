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
                    I have graduated with a degree in Bachelor of Computing Science from Thompson Rivers University. <br />
                    I have experience with android mobile app development and web development. <br />
                    My app <a href="https://play.google.com/store/apps/details?id=com.pearlauncher.pearlauncher">Pear Launcher</a> has over one million <b>downloads</b> and more than 30 thousand <b>users</b>. <br />
                    My open source projects are hosted on my <a href="https://github.com/YAJATapps"> GitHub</a>  repository. <br />
                    I have experience with developing apps for windows.
                </h1>

                <br />
            </div>
        )
    }
}