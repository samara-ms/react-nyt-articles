import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import './cpArticleList.scss';
import CpArticleCard from './CpArticleCard';

const CpArticleList = ({ articles, loading }) => {
    if (loading) {
        return (
            <div className="loader-container">
                <ThreeDots height="80" width="80" radius="9" color="#007bff" ariaLabel="three-dots-loading" visible={true} />
            </div>
        );
    }

    if (!articles || articles.length === 0) {
        return <div className="article-list">No articles available</div>;
    }

    return (
        <div className="article-list">
            <h1>NY Times Most Popular Articles</h1>
            <ul className="articles">
                {articles.map(article => (
                    <CpArticleCard key={article.id} article = {article}/>
                ))}
            </ul>
        </div>
    );
};

export default CpArticleList;