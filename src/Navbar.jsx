import React, { useState } from "react";
import {
     NavLink
} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import CollectionsIcon from '@mui/icons-material/Collections';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CloseIcon from '@mui/icons-material/Close';
import { fontFamily } from "@mui/system";
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import img from '../src/img/icon.png';



const Navbar = () => {

     const [icon, iconf] = useState(false);
     return (
          <>
               <nav className="navbar navbar-expand-lg" >
                    <div className="container-fluid  cd ">
                         <NavLink className="navbar-brand" to="/" id="iconA" > <img src={img} alt="" style={{ width: '50px', height: '50px' }} />
                              ...*React Demo*...</NavLink>
                         <button className="navbar-toggler " type="button"
                              style={{ width: '25px', textAlign: 'left', padding: '0px', }}
                              data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                              {(icon) ? <CloseIcon onClick={() => iconf(false)} /> : <FormatListBulletedIcon onClick={() => {
                                   iconf(true);
                              }} />}

                         </button>
                         <div className="collapse navbar-collapse" id="navbarNav">
                              <ul className="navbar-nav ullist" style={{ marginLeft: 'auto', fontWeight: 'bold' }}>
                                   <li className="nav-item">
                                        <NavLink className="nav-link active t1" style={({ isActive }) => ({
                                             color: isActive ? '#fff' : '#545e6f',
                                             background: isActive ? '#7600dc' : '#f0f0f0',
                                             textAlign: 'center'
                                        })} aria-current="page" to="/"> <HomeIcon /> Home </NavLink>
                                   </li>
                                   <li className="nav-item">
                                        <NavLink className="nav-link t1" style={({ isActive }) => ({
                                             color: isActive ? '#fff' : '#545e6f',
                                             background: isActive ? '#7600dc' : '#f0f0f0',
                                             textAlign: 'center'
                                        })} to="/about"><ImportContactsIcon /> About</NavLink>
                                   </li>
                                   <li className="nav-item">
                                        <NavLink className="nav-link t1" style={({ isActive }) => ({
                                             color: isActive ? '#fff' : '#545e6f',
                                             background: isActive ? '#7600dc' : '#f0f0f0',
                                             textAlign: 'center'
                                        })} to="/service"><CollectionsIcon /> Galery</NavLink>
                                   </li>
                                   <li className="nav-item">
                                        <NavLink className="nav-link t1" style={({ isActive }) => ({
                                             color: isActive ? '#fff' : '#545e6f',
                                             background: isActive ? '#7600dc' : '#f0f0f0',
                                             textAlign: 'center'
                                        })} to="/contact"><CallIcon /> Contact</NavLink>
                                   </li>

                                   <li className="nav-item">
                                        <NavLink className="nav-link t1" style={({ isActive }) => ({
                                             color: isActive ? '#fff' : '#545e6f',
                                             background: isActive ? '#7600dc' : '#f0f0f0',
                                             textAlign: 'center'
                                        })} to="/note"><LaptopChromebookIcon /> Note</NavLink>
                                   </li>


                              </ul>
                         </div>
                    </div>
               </nav>






          </>
     )
}
export default Navbar;