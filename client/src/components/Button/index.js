import React, { useState, useContext, useEffect } from "react";
import API from "../../utils/API";
import { BookContext } from "../../App";

function Button({id, title, authors, description, image, link}) {

  const {saved, setSaved} = useContext(BookContext);
  const [text, setText] = useState("Save");

  const handleClick = () => {
    if (text === "Save") {
      // then save the book
      API.saveBook(id, title, authors, description, image, link)
      .then(res => res.json())
      .then(data=> {
        console.log(data);
        if (saved.length > 0) {
          setSaved([...saved, {_id: id, title: title, authors: authors, description: description, image: image, link: link}])

        } else {
          setSaved([{_id: id, title: title, authors: authors, description: description, image: image, link: link}])
        }
      })

      setText("Delete");
    } else if (text === "Delete") {
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
            setText("Save");
          } else {
            setSaved([...saved]);
            setText("Save");
          }
          
        }
      }) 
    }
  }

  useEffect(() => {
    // if book is in saved then delete
    // else save
    const index = saved.findIndex(elem => elem._id === id);

    if (index === -1) {
      setText("Save");
    } else {
      setText("Delete");
    }
  }, [])

  
  return (
    <button onClick={handleClick}>{text}</button>    
  )

}


export default Button;