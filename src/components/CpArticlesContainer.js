import React, { useState, useEffect } from 'react';
import { fetchArticles } from '../Api';
import CpArticleList from './CpArticleList';
// import CpArticleDetail from './CpArticleDetails';
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
                {/* <Route path="/article/:id" element={<CpArticleDetail articles={articles} />} /> */}
            </Routes>
        </Router>
    );
};

export default CpArticlesContainer;