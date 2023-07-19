import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const signupSchema = Yup.object().shape({});

export const Signup = () => {
  const navigate = useNavigate();

  const signupForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
      gender: "",
      date: "",
      address: "",
      password: "",
    },
    onSubmit: async (values) => {
      const res = await fetch("http://localhost:5000/user/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      console.log(res.status);

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "User Registered Successfully",
          text: "Please Login to Continue",
        });
        navigate("/login");
      }
    },
    validationSchema: signupSchema,
  });
  return (
    <div>
      <body className="d-flex justify-content-center align-items-center vh-100 w-100">
        <div className="signup">
          <form onSubmit={signupForm.handleSubmit}>
            <h3>Signup</h3>
            <span style={{ color: "red", fontSize: 14, marginLeft: 14 }}>
              {signupForm.touched.name && signupForm.errors.name}
            </span>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="myinput2"
              name="name"
              onChange={signupForm.handleChange}
              value={signupForm.values.name}
            />
            <span style={{ color: "red", fontSize: 14, marginLeft: 14 }}>
              {signupForm.touched.email && signupForm.errors.email}
            </span>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="myinput2"
              name="email"
              onChange={signupForm.handleChange}
              value={signupForm.values.email}
            />
            <span style={{ color: "red", fontSize: 14, marginLeft: 14 }}>
              {signupForm.touched.number && signupForm.errors.number}
            </span>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="myinput2"
              name="password"
              onChange={signupForm.handleChange}
              value={signupForm.values.password}
            />
            <span style={{ color: "red", fontSize: 14, marginLeft: 14 }}>
              {signupForm.touched.password && signupForm.errors.password}
            </span>
            <label htmlFor="number">Number</label>
            <input
              type="number"
              className="myinput2"
              name="number"
              onChange={signupForm.handleChange}
              value={signupForm.values.number}
            />
            <span style={{ color: "red", fontSize: 14, marginLeft: 14 }}>
              {signupForm.touched.gender && signupForm.errors.gender}
            </span>
            <label htmlFor="gender">Gender</label>
            <input
              type="gender"
              className="myinput2"
              name="gender"
              onChange={signupForm.handleChange}
              value={signupForm.values.gender}
            />
            <span style={{ color: "red", fontSize: 14, marginLeft: 14 }}>
              {signupForm.touched.date && signupForm.errors.date}
            </span>
            <label htmlFor="date">DOB</label>
            <input
              type="date"
              className="myinput2"
              name="date"
              onChange={signupForm.handleChange}
              value={signupForm.values.date}
            />
            <span style={{ color: "red", fontSize: 14, marginLeft: 14 }}>
              {signupForm.touched.address && signupForm.errors.address}
            </span>
            <label htmlFor="address">Address</label>
            <input
              type="address"
              className="myinput2"
              name="address"
              onChange={signupForm.handleChange}
              value={signupForm.values.address}
            />
            <span style={{ color: "red", fontSize: 14, marginLeft: 14 }}>
              {signupForm.touched.code && signupForm.errors.code}
            </span>
            <label htmlFor="code">Pincode</label>
            <input
              type="code"
              className="myinput2"
              name="code"
              onChange={signupForm.handleChange}
              value={signupForm.values.code}
            />
            <div>
              <button className="sibt">Send</button>
            </div>
          </form>
        </div>
      </body>
    </div>
  );
};
export default Signup;
