import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {

  const [recipeDetail, setRecipeDetail] = useState(null);

  const {id} = useParams();

  const fetchRecipeData = async () => {
    const res = await fetch("http://localhost:5000/recipe/getbyid/"+id);
    const data = await res.json();
    console.log(data);
    setRecipeDetail(data);
  }

  useEffect(() => {
    fetchRecipeData();
  }, [])

  const displayRecipe = () => {
    if(recipeDetail === null) return (<h1>Loading...</h1>);
    return (
      <div className="row" style={{marginTop: '10rem'}}>
        <div className="col-md-6">
          <img src={"http://localhost:5000/"+recipeDetail.image} alt="" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>{recipeDetail.title}</h1>
          <h5>Category: {recipeDetail.category}</h5>
          <h5>Type: {recipeDetail.type}</h5>
          <h5>Ingredients</h5>
          <ul>
            {recipeDetail.ingredients.map(ingredient => (
              <li>{ingredient.name} - {ingredient.quantity}</li>
            ))}
          </ul>
          <h5>Discription</h5>
          <p>{recipeDetail.discription}</p>
        </div>
      </div>
    )
  }
  

  return (
    <div>
      <div className='container'>
        {displayRecipe()}
      </div>
    </div>
  )
}

export default RecipeDetails;