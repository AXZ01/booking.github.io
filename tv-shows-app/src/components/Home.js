import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

const Home = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
                setShows(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="home-container">
            <h1 className="home-title">TV Shows</h1>
            <ul className="show-list">
                {shows.map(show => (
                    <li className="show-item" key={show.show.id}>
                        <Link to={`/show/${show.show.id}`}>
                            <img className="show-image" src={show.show.image?.medium} alt={show.show.name} />
                            <div className="show-details">
                                <h2>{show.show.name}</h2>
                                <p>{show.show.language}</p>
                                <p>{show.show.premiered}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );

};

export default Home;
