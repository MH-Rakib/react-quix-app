import React, { useState } from "react";
import Form from "./Form";
import TextInputs from "./../Inputs/TextInputs";
import Checkbox from "./../Inputs/Checkbox";
import Button from "./../Inputs/Button";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./../../AuthContext/Authcontext";

const SignupForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const { signup, currentUser } = useAuth();
  const history = useHistory();

  const handleInputs = (e) => {
    console.log(e.target.name);
    const data = { ...userData };
    data[e.target.name] = e.target.value;
    setUserData(data);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(userData);
    if (userData.password !== userData.confirmPassword) {
      return setError("Password Dosent Match");
    }

    try {
      setError("");
      setLoading(true);
      const { email, password, name } = userData;
      await signup(email, password, name);
      console.log(currentUser);
      history.push("/");
    } catch (err) {
      setLoading(false);
      console.log(err);
      setError("Failed to create an account");
    }
  }

  return (
    <Form style={{ height: "500px" }} onSubmit={handleSubmit}>
      <>
        <TextInputs
          required
          onChange={handleInputs}
          type={"text"}
          placeholder={"Your Name"}
          icon={"person"}
          name="name"
          // value={userName}
        ></TextInputs>
        <TextInputs
          required
          onChange={handleInputs}
          type={"email"}
          placeholder={"Your Email"}
          icon={"alternate_email"}
          name="email"
          // value={userEmail}
        ></TextInputs>
        <TextInputs
          required
          onChange={handleInputs}
          type={"password"}
          placeholder={"Your Password"}
          icon={"lock"}
          name="password"
          // value={userPassword}
        ></TextInputs>
        <TextInputs
          required
          onChange={handleInputs}
          type={"password"}
          placeholder={"Retype Password"}
          icon={"lock_clock"}
          name="confirmPassword"
          // value={userRetypePassword}
        ></TextInputs>
        <Checkbox
          required
          onChange={handleInputs}
          type={"checkbox"}
          text={"I agree to the Terms & Conditions"}
          name="agree"
          // value={userAgree}
        />
        <Button disabled={loading} type="submit">
          <span>Submit Now!</span>
        </Button>

        {error && <p className="error">{error}</p>}

        <div className="info">
          Already have an account? <Link to="/login">Log In</Link> instead.
        </div>
      </>
    </Form>
  );
};

export default SignupForm;
