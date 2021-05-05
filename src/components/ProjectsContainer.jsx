import React, { Component } from 'react'
import './../css/ProjectsContainer.css';

// A container for project boxes
export default class ProjectsContainer extends Component {

    // Render this component
    render() {
        return (
            <div
                className='Projects-container'>
                {this.props.children}
            </div>
        )
    }

}
