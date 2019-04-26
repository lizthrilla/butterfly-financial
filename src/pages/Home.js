import React from 'react'
import './Home.css'
import Header from '../components/Header'
import Service from '../components/Service'
import Butterfly from '../components/Butterfly'

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Service />
            <Butterfly />
        </div>
    )

}

export default Home