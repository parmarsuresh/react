import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
// import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Navbar from "./Navbar.jsx";
import Service from "./Service";
import './index.css';
import Keepnote from "./Keepnote";
import {
  Routes,
  Route

} from "react-router-dom";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';


function App() {
  return (
    <>
      <div className="container-fluid">

        <Navbar />


        <div className=" context">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/note" element={<Keepnote />} />
            <Route path="*" element={<Home />} />

          </Routes>
        </div>
        <div className="footer">
          <h3><FacebookIcon style={{ cursor: 'pointer', marginRi: '5px' }} /> <InstagramIcon style={{ cursor: 'pointer', marginRi: '5px' }} /> <LinkedInIcon style={{ cursor: 'pointer', marginRi: '5px' }} /> <TwitterIcon style={{ cursor: 'pointer', marginRi: '5px' }} />  Developed By parmar Suresh L  </h3>
        </div >
      </div >






    </>
  );
}

export default App;
