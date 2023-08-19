import { useState } from "react";
import "./SigninFrom.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import { FormInput } from "../FormInput/FormInput";

const defaultFormFields = {
  email: "",
  password: "",
};

export const SignInForm = () => {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const [loginstatus, setloginstatus] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);

    if (!password || !email) {
      toast.error("Enter all the field", {
        autoClose: 1000,
      });
    } else {
      try {
        const config = {
          headers: {
            "content-type": "application/json",
          },
        };
        setLoading(true);
        const { data } = await axios.post(
          "https://flipkartgrid-backend.onrender.com/api/v1/users/login",
          { email: email, password: password },
          config
        );
        console.log(data);
        const fdata = await data.token;
        if (fdata) {
          console.log(data);
          localStorage.setItem("userInfo", JSON.stringify(data));
          navigate("/");
          toast.success("Logged in successfully!", {
            autoClose: 1000,
          });
          setLoading(false);
        } else {
          throw new Error("Invalid");
          setLoading(false);
        }
      } catch (err) {
        // alert(err);
        // console.log(err.response.data.message);
        toast.error(err.response.data.message, {
          autoClose: 1000,
        });
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account? </h2>
      <span>Sign in with your email and password </span>

      <form onSubmit={login} method="POST">
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

        <div className="btn" onClick={login}>
          SIGN IN
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
