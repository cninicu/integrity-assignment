import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import SignIn from "../modules/SignIn";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};
