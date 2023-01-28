import React from "react";
import { useRoutes } from "react-router-dom";
import SignInPage from "../Sign-inPage/SignIn";
import SignUpPage from "../Sign-up-page/SignUpPage";

const RegisterRoutes = () => {
  let elements = useRoutes([
    {
      path: "/",
      element: <SignUpPage />,
    },
    {
      path: "/SignIn",
      element: <SignInPage />,
    },
   
  ]);

  return elements;
};

export default RegisterRoutes;
