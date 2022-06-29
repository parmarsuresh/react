import React, { useState } from "react";
import List from "./List";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import EditRoadSharpIcon from '@mui/icons-material/EditRoadSharp';


var Todo = () => {

     const [name, f] = useState('');
     const [name1, f1] = useState([]);
     const [togglesubmit, togglesubmitf] = useState(true);
     const [getid, getidf] = useState(null);

     var insert = (event) => {
          f(event.target.value);
     }
     var showdata = () => {
          if (name == "") {
               alert("please enter the item");
          }
          else if (name && togglesubmit) {
               var addid = { id: new Date().getTime(), name: name };
               f1((p) => {
                    return (
                         [...p, addid]
                    );
               });

               /*
                or next on is 
               f1([...name1, addid]);*/
          }
          else {
               f1((p) => {
                    return (
                         p.map((val) => {
                              if (getid === val.id) {
                                   return { ...val, name: name };
                              }
                              return val;
                         }));
               });
               getidf(null);
               togglesubmitf(true);
          }
          f("");

     }

     var deleteItem = (id) => {
          f1((oldarray) => {
               return (oldarray.filter((v) => {
                    return id != v.id;
               }))
          });
     }

     var editbtn = (id) => {
          var editValue = name1.filter((val) => {
               return id === val.id;
          });
          togglesubmitf(false);
          f(editValue[0].name);
          getidf(editValue[0].id);
     }
     var deleteall = () => {
          f1([]);
     }
     return (
          <>
               <div className="todoL">
                    <h1>Todo List </h1>
                    <div className="listname">
                         <input type="text" value={name} onChange={insert} placeholder="Add an Item" ></input>
                         {
                              togglesubmit ? (<button onClick={showdata}><AddIcon /></button>) : (<button onClick={showdata}><EditRoadSharpIcon /></button>)
                         }


                    </div>
                    <div className="Lshow">
                         <ul>
                              {
                                   name1.map((val) => {
                                        return (
                                             <List key={val.id} item={val.name} id={val.id} onSelect={deleteItem} fun={editbtn} />
                                        )
                                   })
                              }
                         </ul>
                    </div>
                    <Button variant="outlined" onClick={deleteall}>Delete All</Button>
               </div>
          </>
     );
}

export default Todo;