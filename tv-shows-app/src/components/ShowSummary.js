import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ShowSummary.css';

const ShowSummary = () => {
    const { id } = useParams();
    const [summary, setSummary] = useState('');

    useEffect(() => {
        const fetchShowSummary = async () => {
            try {
                const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
                setSummary(response.data.summary);
            } catch (error) {
                console.error('Error fetching show summary:', error);
            }
        };

        fetchShowSummary();
    }, [id]);

    return (
        <div className="summary-container">
            <h2 className="summary-heading">Detailed Summary</h2>
            <div className="summary-content">{summary}</div>
        </div>
    );
};

export default ShowSummary;
