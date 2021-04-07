import React, { Component } from 'react'
import './ProjectBox.css';

export default class ProjectBox extends Component {
    render() {
        return (
            <div className='Project-box'>
                <img src={this.props.projectBanner} className="App-logo" alt={this.props.bannerAlt} />

                <div className='Flex-column'>
                    <div className='Project-info'>
                        <h1>{this.props.projectName}<br></br></h1>
                        <h3>{this.props.projectDescription}</h3>
                    </div>
                    <a
                        className="App-link"
                        href={this.props.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer">
                        Learn More
                </a>
                </div>
            </div>
        )
    }
}
