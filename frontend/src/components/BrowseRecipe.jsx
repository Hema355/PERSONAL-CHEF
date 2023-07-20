import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const BrowseRecipe = () => {
  const [recipeList, setRecipeList] = useState([]);

  const {recipe} = useParams();

  const fetchRecipeData = async () => {
    const res = await fetch("http://localhost:5000/recipe/getall");
    const data = await res.json();
    console.log(data);
    if(recipe){
        const filteredData = data.filter(recipe => recipe.title.toLowerCase().includes(recipe.toLowerCase()));
        setRecipeList(filteredData);
    }else{
        setRecipeList(data);
    }
  };

  useEffect(() => {
    fetchRecipeData();
  }, []);

  const displayAllRecipies = () => {
    if (recipeList.length === 0)
      return <h1 className="text-center display-4">No Recipies Found</h1>;
    return recipeList.map((recipe) => (
      <div>
        <img
          src={"http://localhost:5000/" + recipe.image}
          className="myimage"
          alt=""
        />
        <h4>{recipe.title}</h4>
        <Link to={"/details/" + recipe._id}>View full Recipe</Link>
      </div>
    ));
  };

  return (
    <div>
      <header className="header1"></header>
      <h1 className="display-2 fw-bold text-center text-black mt-3 p-3">
        All Recipes
      </h1>
      {<div className="box text-center">{displayAllRecipies()}</div>}

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="">Enterprises</a>
                </li>
                <li>
                  <a href="">Bussiness</a>
                </li>
                <li>
                  <a href="">Wholesale</a>
                </li>
                <li>
                  <a href="">Retailer</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="footer-col">
              <h4>Help</h4>
              <ul>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">E-mail</a>
                </li>
                <li>
                  <a href="">Message</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="footer-col">
              <h4>Product</h4>
              <ul>
                <li>
                  <a href="">Veg Recipie</a>
                </li>
                <li>
                  <a href="">Fast Food Recipie</a>
                </li>
                <li>
                  <a href="">Dry veg Recipie</a>
                </li>
                <li>
                  <a href="">Drinks</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="footer-col">
              <h4>Follow Us</h4>
              <ul>
                <li>
                  <a href="">
                    <i class="fa-brands fa-facebook fa-beat"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="fa-brands fa-whatsapp fa-beat"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="fa-brands fa-twitter fa-beat"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="fa-brands fa-instagram fa-beat"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BrowseRecipe;
