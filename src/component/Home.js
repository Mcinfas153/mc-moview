import React from 'react'
import Slider from './Slider'
import Row from './Row'

export default function Home() {
    return (
        <div className="home">
            <Slider />
            <div className="container">
                <Row title="Top Movies" />
                <Row title="New Movies" />
            </div>
        </div>
    )
}
