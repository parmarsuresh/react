import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Service = () => {
     const [data, dataf] = useState([]);
     const [name, namef] = useState('');
     const getdata = async () => {

          const res = await axios(`https://api.unsplash.com/photos/?${(name) ? name : 'office'}&client_id=3V8XX7B_hAHxXZnzODE50GxLJoPUfdwnzO9USN_ssEs`)
          console.log(res.data);
          dataf(res.data);
          console.log(name);
     }
     useEffect(() => {
          getdata();
     }, [name]);

     var insert = (e) => {
          namef(e.target.value);
     }

     return (
          <>

               <div className="search">
                    <input type="text" value={name} onChange={insert} placeholder="Searching ..." />

               </div>

               <div className="row gy-4 p-5">
                    {data.map((val, index) => {
                         return (<Card key={index} link={val.urls.small} fname={val.user.first_name} />);
                    })}
               </div>
          </>
     )
}
export default Service;