import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("invalid email").required("required email"),
  password: Yup.string().required("required password"),
});

const Login = () => {
  const navigate = useNavigate();
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const res = await fetch("http://localhost:5000/user/authenticate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      console.log(res.status);

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "User Logged In Successfully",
        });

        const data = await res.json();
        sessionStorage.setItem("user", JSON.stringify(data));
        // setLoggedIn(true);
        navigate('/AddRecipe');
      } else if (res.status === 401) {
        Swal.fire({
          icon: "error",
          title: "Invalid Credentials",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Something Went Wrong",
        });
      }
    },
    validationSchema: loginSchema,
  });

  return (
    <div>
      <body className="d-flex justify-content-center align-items-center vh-100 w-100">
        <form onSubmit={loginForm.handleSubmit}>
          <div className="login">
            <h3>Log In</h3>
            <span style={{ color: "red", fontSize: 14, marginLeft: 10 }}>
              {loginForm.touched.email && loginForm.errors.email}
            </span>
            <label htmlFor="email"></label>
            <input
              type="email"
              className="myinput"
              placeholder="email"
              name="email"
              onChange={loginForm.handleChange}
              value={loginForm.values.email}
            />
            <span style={{ color: "red", fontSize: 14, marginLeft: 10 }}>
              {loginForm.touched.password && loginForm.errors.password}
            </span>
            <label htmlFor="password"></label>
            <input
              type="password"
              className="myinput"
              name="password"
              placeholder="password"
              onChange={loginForm.handleChange}
              value={loginForm.values.password}
            />
            <div className="text-center">
              <button className="lobt" onChange={loginForm.handleChange}>
                Login{alert.type}
              </button>
              :{alert.msg}
            </div>
          </div>
        </form>
      </body>
    </div>
  );
};

export default Login;
