/*import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArticleCard from './ArticleCard';
import articles from '../data/articles'; // Importation des données des articles
import '../styles/blog_list.css'

function BlogList () {
    const navigate = useNavigate();

    const handleCardClick = (id) => {
      navigate(`/article/${id}`);
    };

  return (
    <div className='bg-blog-list'>
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
*/
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArticleCard from './ArticleCard';
import articles from '../data/articles'; // Importation des données des articles
import '../styles/blog_list.css'

function BlogList () {
    const navigate = useNavigate();

    const handleCardClick = (id) => {
      navigate(`/article/${id}`);
    };

  return (
    <div className='bg-blog-list'>
      <div className='grid-class'>
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