import React, { Component } from 'react'
import logo from './../img/logo.png';
import './../css/Header.css';

// The header with icon and text
export default class Header extends Component {

    // Render this component
    render() {
        return (
            <header
                className="App-header">
                <img
                    src={logo}
                    id="App-logo"
                    alt="logo" />
                <h1>
                    Portfolio
                </h1>
            </header>
        )
    }
    
}
