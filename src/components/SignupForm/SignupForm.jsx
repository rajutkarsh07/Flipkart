import { useState } from "react";

import "./SignupForm.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

import { FormInput } from "../FormInput/FormInput";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword || !password || !displayName) {
      console.log("password do no match");
      toast.error("Passwords do not match!", {
        autoClose: 1000,
      });
      return;
    } else {
      try {
        const config = {
          headers: {
            "content-type": "application/json",
          },
        };
        // setLoading(true);
        const data = await axios.post(
          "https://flipkartgrid-backend.onrender.com/api/v1/users/signup",
          {
            name: displayName,
            email,
            password,
            confirmPassword,
          },
          config
        );
        toast.success("Check mail for verification", {
          autoClose: 1000,
        });
        console.log(data);
        // setLoading(false);

        const fdata = await data.token;
        if (!fdata) {
          toast.error("invalid credentials", {
            autoClose: 1000,
          });
          // setLoading(false);
        } else {
          // setName("");
          // setEmail("");
          // setPassword("");
          // setConfirmPassword("");
          // setLoading(false);

          setFormFields({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
        }
      } catch (err) {
        console.log(err);
        toast.error(err.response.data.message, {
          autoClose: 1000,
        });
        // setLoading(false);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>{"Don't have an account?"} </h2>
      <span>Sign up with your email and password </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <div className="btn" onClick={submitHandler}>
          SIGN UP
        </div>
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};
