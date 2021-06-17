import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Row(props) {
    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };
    return (
        <div className="top__movies">
            <h1 className="section__header">{props.title}</h1>
            <Slider {...settings}>
                <div>
                    <img className="slider__img" alt="poster" src="https://images.moviepostershop.com/replicas-movie-poster-1000778791.jpg" />
                </div>
                <div>
                    <img className="slider__img" alt="poster" src="https://images.moviepostershop.com/replicas-movie-poster-1000778791.jpg" />
                </div>
                <div>
                    <img className="slider__img" alt="poster" src="https://images.moviepostershop.com/replicas-movie-poster-1000778791.jpg" />
                </div>
                <div>
                    <img className="slider__img" alt="poster" src="https://images.moviepostershop.com/replicas-movie-poster-1000778791.jpg" />
                </div>
                <div>
                    <img className="slider__img" alt="poster" src="https://images.moviepostershop.com/replicas-movie-poster-1000778791.jpg" />
                </div>
                <div>
                    <img className="slider__img" alt="poster" src="https://images.moviepostershop.com/replicas-movie-poster-1000778791.jpg" />
                </div>
            </Slider>
        </div>
    )
}
