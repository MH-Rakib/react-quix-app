import { getAuth } from "@firebase/auth";
import React from "react";
import { Redirect, Route } from "react-router";

const PrivateRoute = ({ children, ...rest }) => {
  const { currentUser } = getAuth();
  return (
    <Route
      {...rest}
      render={() =>
        currentUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
