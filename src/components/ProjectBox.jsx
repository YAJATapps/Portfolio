import React, { Component } from 'react'
import './ProjectBox.css';

export default class ProjectBox extends Component {
    render() {
        return (
            <div className='Project-box'>
                <img src={this.props.projectBanner} className="App-logo" alt={this.props.bannerAlt} />
                <h1>{this.props.projectName}</h1>
                <h3>{this.props.projectDescription}</h3>
            </div>
        )
    }
}
