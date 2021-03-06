import React, { Component } from 'react'
import './../css/ProjectBox.css';

// A project box that contains project image, description and link buttons
export default class ProjectBox extends Component {

    // Render this component
    render() {
        return (
            <div
                className='Project-box'>
                <img
                    src={this.props.projectBanner}
                    className="App-logo"
                    alt={this.props.bannerAlt} />

                <h1>
                    {this.props.projectName}
                    <br></br>
                </h1>
                <h3 className='Project-description'>
                    {this.props.projectDescription}
                </h3>

                <div
                    className='Buttons-row'>
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
