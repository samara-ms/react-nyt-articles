import React from 'react';
import { useParams } from 'react-router-dom';
import './cpArticleDetails.scss';

const CpArticleDetail = ({ articles }) => {
    const { id } = useParams();
    const article = articles.find(article => article.id === Number(id));
    if (!article) return <div>Article not found</div>;

    return (
        <div className="article-details">
            <h2>{article.title}</h2>
            <p className="published-date">Published: {article.published_date}</p>         
            <p className="abstract">{article.abstract}</p>
            {/* Displaying Image */}
            {article.media && article.media.length > 0 && (
                <div className="image-container">
                    <img
                        src={article.media[0]['media-metadata'][2].url} // Adjust index as per your image size preference
                        alt={article.title}
                        className="article-image"
                    />
                    {article.media[0].caption && (
                        <p className="image-caption">{article.media[0].caption}</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default CpArticleDetail;