import React from "react";

function CpArticleCard({article}) {
  return (
    <li key={article.id} className="article-item">
      <a href={article.url} rel="noopener noreferrer" className="article-title">
        {/* <Link to={`/article/${article.id}`} className="article-title"> */}
        {article.media && article.media.length > 0 && (
          <div className="image-container">
            <img
              src={article.media[0]["media-metadata"][2].url}
              alt={article.title}
              className="article-image"
            />
          </div>
        )}
        <h3 className="article-title">{article.title}</h3>
        <p className="byline">{article.byline}</p>
        <div className="line"></div>
        {article.media && article.media.length > 0 && (
          <p className="image-caption">{article.media[0].caption}</p>
        )}
        {/* </Link> */}
        {/* <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a> */}
      </a>
    </li>
  );
}

export default CpArticleCard;
