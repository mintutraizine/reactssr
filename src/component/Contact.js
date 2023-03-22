import React from "react";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div>
  <h1 style={{ backgroundColor: "red" }}>Welcome to the contact </h1>
  <Helmet>  
        <html lang="en" />  
        <title>Contact Helmet Tutorial</title>  
        <meta name="description" content="Tutorial for React Helmet" />  
        <meta name="theme-color" content="#E6E6FA" />  
      </Helmet> 
  </div>
  )
 
};

export default Contact;
