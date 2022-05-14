import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { All, Bag } from "../modules/components";
import { SignIn } from "../modules/components";
import { PrivateRoute } from "../modules/elements/PrivateRoute";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/all" element={<PrivateRoute component={<All />} />} />
        <Route path="/bag" element={<PrivateRoute component={<Bag />} />} />
        <Route path="/" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};
