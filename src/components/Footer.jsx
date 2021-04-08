import React, { Component } from 'react'
import './../css/Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <hr></hr>

                <div className='App-footer'>

                    <span className='copyright'>&#169; 2021 Yajat Kumar</span>

                    <a
                        className="Footer-link"
                        href='mailto:yajatapps3@gmail.com'
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
