import React, { Component } from 'react'
import './../css/SectionTitle.css';

// A title for the section
export default class SectionTitle extends Component {

    // Render this component
    render() {
        return (
            <div
                className='Section-title' id={this.props.id}>
                <h1
                    className='Section-h1'>
                    {this.props.sectionName}
                </h1>
            </div>
        )
    }
}