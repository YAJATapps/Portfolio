import React, { Component } from 'react'
import './../css/SectionTitle.css';

// A project box that contains project image, description and link buttons
export default class SectionTitle extends Component {

    // Render this component
    render() {
        return (
            <div
                className='Section-title'>
                <h1
                    className='Section-h1'>
                    {this.props.sectionName}
                </h1>
            </div>
        )
    }
}