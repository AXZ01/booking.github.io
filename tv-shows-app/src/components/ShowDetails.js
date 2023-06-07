// ShowDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './ShowDetails.css';

const TicketBookingForm = ({ showName }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your logic to handle the form submission, such as sending data to a backend server
        console.log('Booking submitted:', name, email);
    };

    return (
        <div className="ticket-booking-form">
            <h3>Book Movie Ticket</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="show">Show:</label>
                    <input type="text" id="show" value={showName} disabled />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

const ShowDetails = () => {
    const { id } = useParams();
    const [show, setShow] = useState(null);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const fetchShowDetails = async () => {
            try {
                const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
                setShow(response.data);
            } catch (error) {
                console.error('Error fetching show details:', error);
            }
        };

        fetchShowDetails();
    }, [id]);

    const handleBookTicket = () => {
        setShowForm(true);
    };

    return (
        <div className="show-details-container">
            {show ? (
                <div>
                    <h2 className="show-title">{show.name}</h2>
                    <p className="show-summary">{show.summary}</p>
                    <Link to={`/show/${id}/summary`} className="view-summary-button">View Detailed Summary</Link>
                    <button onClick={handleBookTicket} className="book-ticket-button">Book Movie Ticket</button>
                    {showForm && <TicketBookingForm showName={show.name} />}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ShowDetails;
