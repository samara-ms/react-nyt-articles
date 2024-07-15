import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import './cpArticleList.scss';

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
                    <li key={article.id} className="article-item">
                        <a href={article.url}  rel="noopener noreferrer" className="article-title">
                        {/* <Link to={`/article/${article.id}`} className="article-title"> */}
                         
                        {article.media && article.media.length > 0 && (
                            <div className="image-container">
                                <img
                                    src={article.media[0]['media-metadata'][2].url}
                                    alt={article.title}
                                    className="article-image"
                                    />
                                
                            </div>
                        )}
                        <h3 className="article-title">{article.title}</h3>
                        <p className="byline">{article.byline}</p>
                        <div className='line'></div>
                        {article.media && article.media.length > 0 && (
                        <p className="image-caption">{article.media[0].caption}</p>
                        )}
                        {/* </Link> */}
                        {/* <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a> */}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CpArticleList;