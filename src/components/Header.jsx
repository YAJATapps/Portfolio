import React, { Component } from 'react'
import './../css/Header.css';

// The header with icon and text
export default class Header extends Component {

    // Render this component
    render() {
        return (
            <header
                className="App-header">
                <div>
                    <h1
                        className="Div-center">
                        YAJAT<br />KUMAR
                    </h1>
                    <h2
                        className="Title-name">
                        Software Developer (Student)
                    </h2>
                    <div
                        className="Div-center">
                        <a
                            className="Button"
                            href="https://github.com/YAJATapps/Portfolio/raw/main/assets/Yajat_Kumar-Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer">
                            Download Resume
                        </a>
                    </div>
                </div>
            </header>
        )
    }

}
