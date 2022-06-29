import React from "react";
import img from '../src/img/profile.jfif';
import {
     NavLink
} from "react-router-dom";
const Home = () => {
     return (
          <>
               <div className="main">
                    <div className="first">
                         <h1>  “Build your own dreams or someone else will hire you to build theirs.”</h1>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae temporibus mollitia at ex aperiam sapiente. Cumque nostrum fugiat, doloremque rerum pariatur libero voluptas necessitatibus, explicabo incidunt laboriosam cupiditate, exercitationem dicta!</p>
                         <button><NavLink to="/service" className="btn1">Go Back</NavLink></button>

                    </div>
                    <div className="second">
                         <img src={img} alt="" />
                    </div>
               </div>

          </>
     )
}
export default Home;