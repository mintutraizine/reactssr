import React from "react";
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
