import React, { Component } from 'react'
import './../css/Footer.css';

// A footer with copyright text, contact link and source link
export default class Footer extends Component {

    // Render this component
    render() {
        return (
            <footer>
                <hr></hr>

                <div
                    className='App-footer'>

                    <span
                        className='copyright'>
                        &#169; 2022 Yajat Kumar
                    </span>

                    <a
                        className="Footer-link"
                        href='mailto:yajatcomputer@gmail.com'
                        target="_blank"
                        rel="noopener noreferrer">
                        Contact
                    </a>

                    <a
                        className="Footer-link"
                        href='https://github.com/YAJATapps/Portfolio'
                        target="_blank"
                        rel="noopener noreferrer">
                        View Source
                    </a>
                </div>
            </footer>
        )
    }

}
