import React, { useState } from "react";
import Note from "./Note";
import Todo from "./Todo";

/* keenote page*/
function Keepnote() {

     const [note, notef] = useState({
          title: "",
          sub: "",
     });

     const [show, showf] = useState(false);

     const [nt, ntf] = useState([]);

     var insert = (event) => {
          var { name, value } = event.target;
          notef((prevdata) => {
               return {
                    ...prevdata,
                    [name]: value,
               };
          });

     }

     var insertdata = () => {
          if (note.title != "" || note.sub != "") {
               ntf((f) => {
                    return [...f, note];
               });
          }

          notef(() => {
               return {
                    title: "",
                    sub: "",
               }
          })
     }

     var deletef = (id) => {
          ntf((p) => {
               return (
                    p.filter((val, index) => {
                         return id !== index;
                    })
               )
          })
     }

     return (
          <>
               <div className="keepdiv" onDoubleClick={() => { showf(!show) }}>
                    {
                         show && <input type="text" value={note.title} autoComplete="false" placeholder="Title" name="title" onChange={insert}></input>
                    }

                    <textarea rows="" column="" value={note.sub} placeholder="Enter the note" name="sub" onChange={insert}></textarea>
                    <button onClick={insertdata} >{show ? '➕' : '➖'}</button>
               </div>
               <div className="keepdivL">

                    {
                         nt.map((val, index) => {
                              return <Note key={index} {...val} id={index} onSelect={deletef} />
                         })
                    }


               </div>
               <br></br>
               <hr></hr>
               <br></br>
               <div>
                    <Todo />

               </div>


          </>
     );
}

export default Keepnote;