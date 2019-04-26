import React from 'react'
import './Home.css'
import Header from '../components/Header'
import Service from '../components/Service'

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Service />
        </div>
    )

}

export default Home