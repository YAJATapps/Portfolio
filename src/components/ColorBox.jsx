import React, { Component } from 'react'

// A box to hold other items. It has a background color.
export default class ColorBox extends Component {

    // Render this component
    render() {
        return (
            <div style={{ backgroundColor: this.props.boxColor }}>
                {this.props.children}
                <br />
            </div>
        )
    }
}