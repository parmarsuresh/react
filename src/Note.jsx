import React from "react";


function Note(props) {
     return (
          <>
               <div className="divL">
                    <h1>{props.title}</h1>
                    <h3>{props.sub}</h3>
                    <button onClick={() => {
                         props.onSelect(props.id);
                    }}>❌</button>
               </div>
          </>
     );
}
export default Note;