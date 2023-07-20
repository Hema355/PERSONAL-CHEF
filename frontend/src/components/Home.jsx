import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [recipeList, setRecipeList] = useState([]);

  const [vegRecipies, setVegRecipies] = useState([]);
  const [nonVeg, setNonVeg] = useState([]);
  const [fastFood, setFastFood] = useState([]);

  const navigate = useNavigate();
  const searchText = useRef(null);

  const searchRecipe = (e) => {
    navigate('/browse/'+searchText.current.value);
  }


  const fetchRecipeData = async () => {
    const res = await fetch("http://localhost:5000/recipe/getall");
    const data = await res.json();
    console.log(data);
    setRecipeList(data);
    setFastFood(data.filter((recipe) => recipe.type === "fast-food"));
    setVegRecipies(data.filter((recipe) => recipe.type === "veg"));
    setNonVeg(data.filter((recipe) => recipe.type === "non-veg"));
  };

  useEffect(() => {
    fetchRecipeData();
  }, []);

  const displayRecipies = () => {
    return recipeList.map((recipe) => (
      <div className="col-md-2">
        <div className="card">
          <img
            src={"http://localhost:5000/" + recipe.image}
            alt=""
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{recipe.title}</h5>
            <Link className="btn btn-primary" to={"/details/" + recipe._id}>
              View Recipe
            </Link>
          </div>
        </div>
      </div>
    ));
  };

  const displayVeg = () => {
    if (vegRecipies.length === 0)
      return <h1 className="text-center display-4">No Veg Recipies Found</h1>;
    return vegRecipies.map((recipe) => (
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

  const displayNonVeg = () => {
    if (nonVeg.length === 0)
      return (
        <h1 className="text-center display-4">No Non-Veg Recipies Found</h1>
      );
    return nonVeg.map((recipe) => (
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

  const displayFastFood = () => {
    if (fastFood.length === 0)
      return (
        <h1 className="text-center display-4">No Fast Food Recipies Found</h1>
      );
    return fastFood.map((recipe) => (
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
      <header className="header1">
      <div>
            <input ref={searchText} type="text" name="" className="form-control" placeholder='search recipe here' />
          </div>
          <button className='btn btn-primary mt-3' onClick={searchRecipe}>Search</button>
      </header>
      <h1 className="display-2 fw-bold text-center text-black mt-3 p-3">
        Veg Recipie
      </h1>
      {/* <div className="row">{displayRecipies()}</div> */}
      {<div className="box text-center">{displayVeg()}</div>}
      {/* <div className="box text-center">
       
        <div>
          <img
            src="https://www.archanaskitchen.com/images/archanaskitchen/Indian_Vegetables_Gravy/Lauki_Aloo_Sabzi_Bottlegourd_Potato_Curry_Vegetable_Recipe-1.jpg"
            className="myimage"
            alt=""
          />
          <h4>Louki ki Sabji</h4>
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc3O3a6iAehTSWv0Mh6AVjCR0j1JzhlBImdg&usqp=CAU"
            className="myimage"
            alt=""
          />
          <h4>Chola</h4>
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4U77LSJ_a5LH62f5kwv5TrUFeZoOAi8gMJQ&usqp=CAU"
            className="myimage"
            alt=""
          />
          <h4>Aloo ki Sabji</h4>
        </div>
        <div>
          <img
            src="https://www.geetakiduniya.com/wp-content/uploads/2021/07/paneer-ki-sabji.jpg"
            className="myimage"
            alt=""
          />
          <h4>Matar Paneer</h4>
        </div>
        <div>
          <img
            src="https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2021/Aloo_Parwal_Sabzi_Recipe_3.jpg"
            className="myimage"
            alt=""
          />
          <h4>Parwal Aloo</h4>
        </div>
        <div>
          <img
            src="https://static.toiimg.com/thumb/82289279.cms?width=680&height=512&imgsize=1129879"
            className="myimage"
            alt=""
          />
          <h4>Kadhi</h4>
        </div>
        <div>
          <img
            src="https://www.chefkunalkapur.com/wp-content/uploads/2022/02/rajma-1300x867.jpg?v=1645539065"
            className="myimage"
            alt=""
          />
          <h4>Rajma</h4>
        </div>
      </div> */}
      <h1 className="display-3 fw-bold text-center">Non Veg Recipie</h1>
      {<div className="box text-center">{displayNonVeg()}</div>}

      <h1 className="display-3 fw-bold text-center">Fast Food Recipie</h1>
      {<div className="box text-center">{displayFastFood()}</div>}

      {/* <div className="box2 text-center">
        <div>
          <img
            src="https://www.jocooks.com/wp-content/uploads/2019/03/chow-mein-1-1.jpg"
            className="myimage2"
            alt=""
          />
          <h4>Chaowmeen</h4>
        </div>
        <div>
          <img
            src="https://static.toiimg.com/thumb/54406240.cms?imgsize=113250&width=800&height=800"
            className="myimage2"
            alt=""
          />
          <h4>Macroni</h4>
        </div>
        <div>
          <img
            src="https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2560%2Cc_limit/Smashburger-recipe-120219.jpg"
            className="myimage2"
            alt=""
          />
          <h4>Burger</h4>
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ArNK9PVAeKlfGXkTelGFCHHphbYVVLys9A&usqp=CAU"
            className="myimage2"
            alt=""
          />
          <h4>Momos</h4>
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT95-IMZwCUaUFRaENKc7sinAX-YJG5sNPhMw&usqp=CAU"
            className="myimage2"
            alt=""
          />
          <h4>Pizza</h4>
        </div>
        <div>
          <img
            src="https://www.brit.co/media-library/korean-kimchi-cheese-dogs.png?id=33770013&width=760&quality=80"
            className="myimage2"
            alt=""
          />
          <h4>Hotdog</h4>
        </div>
        <div>
          <img
            src="https://static.toiimg.com/thumb/53223294.cms?imgsize=93390&width=800&height=800"
            className="myimage2"
            alt=""
          />
          <h4>Spring Roll</h4>
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqqZzHDPDr-iXP61aTvR70D_GfUAs0zVHylQ&usqp=CAU"
            className="myimage2"
            alt=""
          />
          <h4>Frankie Roll</h4>
        </div>
      </div> */}
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

export default Home;
