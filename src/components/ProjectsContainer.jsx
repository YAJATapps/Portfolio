import React, { Component } from 'react'
import './../css/ProjectsContainer.css';

export default class ProjectsContainer extends Component {
    render() {
        return (
            <div className='Projects-container'>
                {this.props.children}
            </div>
        )
    }
}
