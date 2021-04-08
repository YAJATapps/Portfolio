import React, { Component } from 'react'
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <hr></hr>

                <div className='App-footer'>

                    <span className='copyright'>&#169; 2021 Yajat Kumar</span>

                    <a
                        className="Footer-link"
                        href='/contact'
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
            </div>
        )
    }
}
