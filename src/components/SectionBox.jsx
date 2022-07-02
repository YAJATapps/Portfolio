import React, { Component } from 'react'
import './../css/SectionBox.css';

// A project box that contains project image, description and link buttons
export default class SectionBox extends Component {

    // Render this component
    render() {
        return (
            <div
                className='Section-box'>
                {this.props.children}
            </div>
        )
    }
}