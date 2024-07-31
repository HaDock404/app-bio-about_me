import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArticleCard from './ArticleCard';
import articles from '../data/articles'; // Importation des données des articles

function BlogList ({ history }) {
    const navigate = useNavigate();

    const handleCardClick = (id) => {
      // Utilisez navigate pour rediriger vers l'article correspondant
      navigate(`/article/${id}`);
    };

  return (
    <div className='bg'>
    <div className="blog-list">
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          article={article}
          onClick={() => handleCardClick(article.id)}
        />
      ))}
    </div>
    </div>
  );
};

export default BlogList;
