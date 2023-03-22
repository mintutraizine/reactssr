import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./component/Contact";
import Error from "./component/Error";
import Home from "./component/Home";
import Layout from "./component/Layout";
export default function App() {
  return (
    <>
    <Routes>
          <Route path="/" element={<Layout />} errorElement={<Error />}>
            <Route path="*" element={<Error />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
          </Route>
         
        </Routes>
    </>
  );
}
