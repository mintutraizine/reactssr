import React from "react";
import { Helmet } from "react-helmet";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Contact from "./Contact";
import ContactModal from "./ContactModal";
import Error from "./Error";
//https://github.com/nfl/react-helmet/issues/79
// export default function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }
const Home = () => {
  return (
    <>
      <div>welcome to home</div>
      <Helmet>  
        <html lang="en" />  
        <title>React Helmet Tutorial</title>  
        <meta name="description" content="Tutorial for React Helmet" />  
        <meta name="theme-color" content="#E6E6FA" />  
      </Helmet> 
      {/* <Router>
        <Routes>
          <Route path="/" element={<ContactModal />} errorElement={<Error />}>
            <Route path="*" element={<Error />} />
            <Route path="/Contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router> */}
      {/* <Error /> */}
      {/* <AppBarComponent /> */}
    </>
  );
};

export default Home;
