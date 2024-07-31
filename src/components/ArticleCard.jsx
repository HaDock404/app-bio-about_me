import React from 'react';
import '../styles/article_card.css'; // Import du fichier de style

function ArticleCard({ article, onClick }) {
  return (
    <div className="article-card" onClick={onClick}>
      <div className="image-container">
        <img src={article.image} alt={article.title} className="article-image" />
      </div>
      <div className="content-container">
        <h2 className="article-title">{article.title}</h2>
        <p className="article-intro">
          {article.intro.length > 100 ? `${article.intro.substring(0, 97)}...` : article.intro}
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
