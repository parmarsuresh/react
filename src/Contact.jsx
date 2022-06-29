import React, { useState } from "react";

const Contact = () => {
     const [fdata, fdataf] = useState({
          fname: "",
          lname: "",
          add: "",
          city: "",
          email: "",
          phone: "",
     });
     const [pass, passf] = useState('');
     const [cpass, cpassf] = useState('');

     var insert = (e) => {
          const { name, value } = e.target;
          console.log(name);
          if (name == 'pass') {
               passf(value);
          }
          else if (name == 'CPass') {
               cpassf(value);
          }
          else {
               fdataf((p) => {

                    return {
                         ...p,
                         [name]: value,
                    }
               });
          }





     }
     var showdata = (e) => {
          e.preventDefault();
          if (pass == cpass) {
               alert(`My name is ${fdata.fname} ${fdata.lname} from ${fdata.add} ${fdata.city} my Email is ${fdata.email} or my phone no is ${fdata.phone} `);

          }
          else {
               alert('password not currect');
          }
          fdataf(() => {
               return {
                    fname: "",
                    lname: "",
                    add: "",
                    city: "",
                    email: "",
                    phone: "",
               }
          });
          passf("");
          cpassf("");
     }

     return (
          <>
               <div className="mfdiv">
                    <h1 style={{ textAlign: 'center' }}>Contact us</h1>
                    <div className="fdiv">
                         <form onSubmit={showdata}>
                              <div className="mb-3">
                                   <label className="form-label">FirstName</label>
                                   <input type="text" onChange={insert} value={fdata.fname} name="fname" className="form-control" aria-describedby="emailHelp" />
                              </div>
                              <div className="mb-3">
                                   <label
                                        className="form-label">LastName</label>
                                   <input type="LastName" value={fdata.lname} onChange={insert} name="lname" className="form-control" />
                              </div>

                              <div className="mb-3">
                                   <label className="form-label">Address</label>
                                   <textarea className="form-control" value={fdata.add} onChange={insert} name="add" ></textarea>
                              </div>
                              <div className="mb-3">
                                   <label className="form-label">City</label>
                                   <input type="text" name="city" value={fdata.city} onChange={insert} className="form-control" />
                              </div>
                              <div className="mb-3">
                                   <label className="form-label">phone</label>
                                   <input type="text" name="phone" value={fdata.phone} onChange={insert} className="form-control" />
                              </div>

                              <div className="mb-3">
                                   <label className="form-label">email</label>
                                   <input type="email" name="email" value={fdata.email} onChange={insert} className="form-control" autoCorrect="false" />
                              </div>

                              <div className="mb-3">
                                   <label className="form-label">Password</label>
                                   <input type="Password" value={pass} name="pass" onChange={insert} className="form-control" />
                              </div>


                              <div className="mb-3">
                                   <label className="form-label">Conform Password</label>
                                   <input type="password" value={cpass} name="CPass" onChange={insert} className="form-control" />
                              </div>



                              <div className="mb-3 form-check">
                                   <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                   <label className="form-check-label" >Check me out</label>
                              </div>
                              <button type="submit" className="btn btn-primary">Submit</button>
                         </form>
                    </div>
               </div>
          </>
     )
}
export default Contact;