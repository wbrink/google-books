import React, { useEffect, useState, useContext } from "react";
import API from "../utils/API";
import Button from "../components/Button";
import {BookContext} from "../App";

function Saved(props) {

  const {saved,setSaved} = useContext(BookContext);

  // const [reload, setReload] = useState(false);
  
  const bookBurner = (e,id) => {
    API.deleteBook(id)
      .then(res => res.json())
      .then(data => {
        if (data == false) {
          console.log("delete failed")
        } else {
          console.log('book deleted');
          
          const index = saved.findIndex(elem => elem._id === id);
          saved.splice(index, 1);
          if (saved.length === 0) {
            setSaved([])
          } else {
            setSaved([...saved]);
          }
          

        }
      })
  }

  
  return (
    <div>
      {saved.length > 0 ? saved.map(el => {
        return <div key={el._id}>{el._id} <button onClick={(e) => bookBurner(e, el._id)}>Burn Book</button></div>
      }): ""}
    </div>
  )
}


export default Saved;