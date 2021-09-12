import React, { useState } from "react";
import TextInputs from "./../Inputs/TextInputs";
import Button from "./../Inputs/Button";
import Form from "./Form";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./../../AuthContext/Authcontext";

const LoginForm = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const { login, currentUser } = useAuth();
  const history = useHistory();

  const handleInputs = (e) => {
    console.log(e.target.name);
    const data = { ...userData };
    data[e.target.name] = e.target.value;
    setUserData(data);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      const { email, password } = userData;
      await login(email, password);
      console.log(currentUser);
      history.push("/");
    } catch (err) {
      setLoading(false);
      console.log(err);
      setError("Failed to login to your account");
    }
  }

  return (
    <Form style={{ height: "330px" }} onSubmit={handleSubmit}>
      <>
        <TextInputs
          required
          onChange={handleInputs}
          type={"email"}
          placeholder={"Your Email"}
          icon={"alternate_email"}
          name="email"
        ></TextInputs>
        <TextInputs
          required
          onChange={handleInputs}
          type={"password"}
          placeholder={"Your Password"}
          icon={"lock"}
          name="password"
        ></TextInputs>

        <Button disabled={loading} type="sumbit">
          <span>Submit Now!</span>
        </Button>

        {error && (
          <p className="error" style={{ textAlign: "center" }}>
            {error}
          </p>
        )}

        <div className="info">
          Don't have an account? <Link to="/signup">Signup</Link> instead.
        </div>
      </>
    </Form>
  );
};

export default LoginForm;
