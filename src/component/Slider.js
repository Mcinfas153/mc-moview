import React from 'react'
import { Carousel } from 'react-bootstrap'
import './css/slider.css'

export default function Slider() {
    return (
        <div className="slider">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://nerdeux.files.wordpress.com/2012/05/dark-knight-rises-banner-bat-symbol.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://collider.com/wp-content/uploads/ripd-banner.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://emileeid.files.wordpress.com/2012/11/gangster-squad-banner.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
