import React, { Component } from 'react'
import logo from './../logo.svg';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} id="App-logo" alt="logo" />
                <h1>Portfolio</h1>
            </header>
        )
    }
}
