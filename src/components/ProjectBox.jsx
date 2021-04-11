import React, { Component } from 'react'
import './../css/ProjectBox.css';

export default class ProjectBox extends Component {
    render() {
        return (
            <div className='Project-box'>
                <img src={this.props.projectBanner} className="App-logo" alt={this.props.bannerAlt} />

                <h1>{this.props.projectName}<br></br></h1>
                <h3>{this.props.projectDescription}</h3>

                <div className='Flex-column'>
                    {
                        this.props.buttons !== undefined && this.props.buttons.hasOwnProperty('website') &&
                        <a
                            className="App-link"
                            href={this.props.buttons.website}
                            target="_blank"
                            rel="noopener noreferrer">
                            Website
                        </a>
                    }
                    {
                        this.props.buttons !== undefined && this.props.buttons.hasOwnProperty('playstore') &&
                        <a
                            className="App-link"
                            href={this.props.buttons.playstore}
                            target="_blank"
                            rel="noopener noreferrer">
                            Play Store
                        </a>
                    }
                    {
                        this.props.buttons !== undefined && this.props.buttons.hasOwnProperty('github') &&
                        <a
                            className="App-link"
                            href={this.props.buttons.github}
                            target="_blank"
                            rel="noopener noreferrer">
                            Github
                        </a>
                    }

                </div>
            </div>
        )
    }
}
