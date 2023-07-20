import { useFormik } from "formik";
import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
import * as Yup from "yup";
const recipeSchema = Yup.object().shape({});

const AddRecipe = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const nameRef = useRef(null);
  const qtyRef = useRef(null);

  const [selFile, setSelFile] = useState("");

  const [ingredients, setIngredients] = useState([]);

  const addIngredients = () => {
    setIngredients([
      ...ingredients,
      {
        name: nameRef.current.value,
        quantity: qtyRef.current.value,
      },
    ]);
  };

  const recipeFom = useFormik({
    initialValues: {
      title: "",
      type: "",
      image: "",
      user: currentUser._id,
      category: "",
      discription: "",
    },
    onSubmit: async (values, { resetForm }) => {
      values.ingredients = ingredients;
      values.image = selFile;
      console.log(values);
      const res = await fetch("http://localhost:5000/recipe/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      console.log(res.status);

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Recipe Added Successfully",
        });
        // resetForm();
      }
    },
    validationSchema: recipeSchema,
  });

  const uploadFile = (e) => {
    const file = e.target.files[0];
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };

  return (
    <div>
      <body className="d-flex justify-content-center align-items-center vh-100">
        <div className="card w-25">
          <div className="card-body p-5">
            <form onSubmit={recipeFom.handleSubmit}>
              <h4>Recipe</h4>
              <span style={{ color: "red", fontSize: 14 }}>
                {recipeFom.touched.title && recipeFom.errors.title}
              </span>
              <label htmlFor="name">Dish Name</label>
              <input
                type="text"
                name="title"
                className="form-control"
                onChange={recipeFom.handleChange}
                value={recipeFom.values.title}
              />
              <span style={{ color: "red", fontSize: 14 }}>
                {recipeFom.touched.type && recipeFom.errors.type}
              </span>
              <label htmlFor="type">Type</label>
              <select
                name="type"
                className="form-control"
                onChange={recipeFom.handleChange}
                value={recipeFom.values.type}
              >
                <option value="">Select Type</option>
                <option value="veg">Veg</option>
                <option value="non-veg">Non-Veg</option>
                <option value="fast-food">Fast Food</option>
              </select>

              <span style={{ color: "red", fontSize: 14 }}>
                {recipeFom.touched.category && recipeFom.errors.category}
              </span>
              <label htmlFor="category">Category</label>
              <input
                type="category"
                className="form-control"
                name="category"
                onChange={recipeFom.handleChange}
                value={recipeFom.values.category}
              />
              <span style={{ color: "red", fontSize: 14 }}>
                {recipeFom.touched.image && recipeFom.errors.image}
              </span>
              <label htmlFor="file">image</label>
              <input type="file" className="file" onChange={uploadFile} />
              <span style={{ color: "red", fontSize: 14 }}>
                {recipeFom.touched.discription && recipeFom.errors.discription}
              </span>
              <label htmlFor="discription">Discription</label>
              <textarea
                name="discription"
                className="form-control"
                onChange={recipeFom.handleChange}
                value={recipeFom.values.discription}
              ></textarea>

              <label htmlFor="">Add Ingredients</label>
              <div className="">
                <div className="d-flex">
                  <input
                    className="form-control"
                    type="text"
                    ref={nameRef}
                    placeholder="Ingredient Name"
                  />
                  <input
                    className="form-control"
                    type="text"
                    ref={qtyRef}
                    placeholder="Quantity"
                  />
                  <button
                    type="button"
                    onClick={addIngredients}
                    className="btn btn-primary"
                  >
                    <i class="fa fa-plus" aria-hidden="true"></i>
                  </button>
                </div>
              </div>

              <label htmlFor="">Added Ingredients</label>
              <ul className="list-group">
                {ingredients.map((ingredient) => (
                  <li className="list-group-item">
                    <h3>{ingredient.name}</h3>
                    <p>{ingredient.quantity}</p>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <button
                  className="btn btn-success"
                  onChange={recipeFom.handleChange}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </body>
    </div>
  );
};

export default AddRecipe;
