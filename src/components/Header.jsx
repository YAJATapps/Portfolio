import React, { Component } from 'react'
import './../css/Header.css';
import resumeLink from './../assets/Yajat_Kumar-Resume.pdf';

// The header with icon and text
export default class Header extends Component {

    downloadResume() {
        const link = document.createElement('a');
        link.href = resumeLink;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

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
                        Software Engineer (Student)
                    </h2>
                    <div
                        className="Div-center">
                        <button
                            className="Button"
                            onClick={this.downloadResume}>
                            Download Resume
                        </button>
                    </div>
                </div>
            </header>
        )
    }

}
