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
                    I'm currently studying Bachelor of Computing Science at Thompson Rivers University. <br />
                    Expected graduation date: 12/31/2022 <br />
                    I'm looking to start a job in software development from February 2023. <br />
                    I have experience with android mobile app development and web development. <br />
                    My most famous app <a href="https://play.google.com/store/apps/details?id=com.pearlauncher.pearlauncher">Pear Launcher</a> has over <b>half million downloads</b> and more than 10 thousand users. <br />
                    My open source projects are hosted on my <a href="https://github.com/YAJATapps"> GitHub</a>  repository. <br />
                    I have experience with developing apps for windows.
                </h1>

                <br />
            </div>
        )
    }
}