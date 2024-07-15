import React, { useState, useEffect } from 'react';
import { fetchArticles } from '../Api';
import CpArticleList from './CpArticleList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const CpArticlesContainer = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchArticles().then(data => {
            console.log('Articles set in state:', data);
            setArticles(data);
            setLoading(false);
        }).catch(error => {
            console.error('Error fetching articles:', error);
            setLoading(false);
        });
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<CpArticleList articles={articles} loading={loading} />} />
            </Routes>
        </Router>
    );
};

export default CpArticlesContainer;