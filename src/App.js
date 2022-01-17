import React, { useState, useEffect } from 'react';

import './App.css';
import SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

function App() {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('Meat');
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    setLoading(true);
    const mainUrl = `${url}${query}`;

    try {
      const response = await fetch(mainUrl);
      const data = await response.json();
      const { meals } = data;
      if (meals) {
        const newMeals = meals.map(item => {
          const { idMeal, strMeal, strCategory, strMealThumb } = item;
          return {
            id: idMeal,
            title: strMeal,
            category: strCategory,
            img: strMealThumb,
          };
        });
        console.log(newMeals);
        setRecipes(newMeals);
      } else {
        setRecipes([]);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    console.log(event);
    fetchRecipes();
  };

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (!recipes) {
    return <h2 className="section-title">No meals matched your criteria </h2>;
  }
  if (!loading) {
    return (
      <div className="container">
        <h2>Recipe App</h2>
        <SearchBar
          handleSubmit={handleSubmit}
          loading={loading}
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <div className="recipes">
          {recipes ? (
            recipes.map(recipe => <RecipeCard key={recipe.id} {...recipe} />)
          ) : (
            <h3>No recipes available</h3>
          )}
        </div>
      </div>
    );
  }
}

export default App;
