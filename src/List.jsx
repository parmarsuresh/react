import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditRoadSharpIcon from '@mui/icons-material/EditRoadSharp';

var List = (props) => {
     return (
          <>
               <div className="list">
                    <li>{props.item}</li>

                    <div className="Listbtn">
                         <EditRoadSharpIcon className="s" onClick={() => {
                              props.fun(props.id);
                         }} />

                         <DeleteForeverIcon className="s" onClick={() => {
                              props.onSelect(props.id);
                         }} />

                    </div>





               </div>
          </>
     );
}

export default List;