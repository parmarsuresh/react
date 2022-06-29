import React from "react";

const Card = (props) => {
     return (
          <>
               <div className="col-md-4 ">
                    <div className="card p-0">
                         <img src={props.link} className="card-img-top" style={{ width: '100%', height: '200px' }} alt="..." />
                         <div className="card-body">
                              <h5 className="card-title">{props.fname}</h5>
                              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <a href="#" className="btn btn-sm btn-secondry btn-danger">Go somewhere</a>
                         </div>
                    </div>
               </div>
          </>
     )
}
export default Card;