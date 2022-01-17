import React from 'react';

const RecipeCard = ({ id, title, img, category }) => {
  const linkToMeal = 'https://www.themealdb.com/meal/' + id;

  return (
    <div className="card">
      <img src={img} alt={title} className="card-image" />
      <div className="card-body">
        <span className="category">{category}</span>
        <h3>{title}</h3>
        <a href={linkToMeal} target="_blank">
          Ingredients
        </a>
      </div>
    </div>
  );
};

export default RecipeCard;
