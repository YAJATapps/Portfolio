import React, { Component } from 'react'
import './../css/ImageCarousel.css';
import './../css/carousel.css';

// A container for image carousel
export default class ImageCarousel extends Component {

    constructor(props) {
        super(props);

        // The states that contain items
        this.state = {
            carouselItems: [],
            indicatorItems: [],
        };
    }

    // Render this component
    render() {
        return (
            <div id="myModal" className="modal">

                { /* Modal content */}
                <div className="modal-content">
                    <span className="close">&times;</span>

                    <div id="carouselImageIndicators" className="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            {this.state.indicatorItems}
                        </div>
                        <div className="carousel-inner">
                            {this.state.carouselItems}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselImageIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselImageIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        </button>
                    </div>
                </div>

            </div>
        )
    }

    componentDidMount() {
        let tempCarousel = [];
        let tempIndicators = [];

        if (this.props.images !== undefined && this.props.images.length > 0) {
            // Add the first image as active
            tempCarousel.push(<div className="carousel-item active">
                <img src={this.props.images[0]} className="d-block w-100" alt="..." />
            </div>);

            // Add remaining carousel image items
            for (let i = 1; i < this.props.images.length; i++) {
                tempCarousel.push(<div className="carousel-item">
                    <img src={this.props.images[i]} className="d-block w-100" alt="..." />
                </div>);
            }

            // Add the first indicator as active
            tempIndicators.push(<button type="button" data-bs-target="#carouselImageIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>);

            // Add remaining indicator items
            for (let i = 1; i < this.props.images.length; i++) {
                let indicator = <button type="button" data-bs-target="#carouselImageIndicators" data-bs-slide-to={i} aria-label={"Slide " + (i + 1)}></button>;
                tempIndicators.push(indicator);
            }
        }

        this.setState({
            carouselItems: tempCarousel,
            indicatorItems: tempIndicators
        });

        // Get the modal
        var modal = document.getElementById("myModal");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = () => {
            this.props.removeCarousel();
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = (event) => {
            if (event.target == modal) {
                this.props.removeCarousel();
            }
        }
    }
}
