import { getAuth } from "@firebase/auth";
import React from "react";
import { Redirect, Route } from "react-router";

const PublicRoute = ({ children, ...rest }) => {
  const { currentUser } = getAuth();
  return (
    <Route
      {...rest}
      render={() =>
        !currentUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )
      }
    />
  );
};

export default PublicRoute;
