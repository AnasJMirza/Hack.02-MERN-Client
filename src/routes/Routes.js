import React from "react";
import { BrowserRouter, Routes as Router, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";

const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/login" element={<SignIn />} />
        </Route>
      </Router>
    </BrowserRouter>
  );
};

export default Routes;
