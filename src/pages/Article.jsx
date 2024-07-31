import React from 'react';
import { useParams } from 'react-router-dom';
import articles from '../data/articles';

function ArticlePage () {
  const { articleId } = useParams(); // Récupération de l'ID de l'article depuis les paramètres de l'URL
  const article = articles.find((art) => art.id === parseInt(articleId, 10));

  if (!article) {
    return <div>Article non trouvé</div>;
  }

  return (
    <div className="article-page">
      <h1 className="full-article-title">{article.title}</h1>
      <img src={article.image} alt={article.title} className="full-article-image" />
      <div className="full-article-content">{article.content}</div>
    </div>
  );
};

export default ArticlePage;
