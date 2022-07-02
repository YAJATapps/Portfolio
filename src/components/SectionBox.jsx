import React, { Component } from 'react'
import './../css/SectionBox.css';

// A box the items of section. It has shadow outline.
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