import React, { useState, useContext } from "react";
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
      // then delete the book from saved 
    }
  }

  return (
    <button onClick={handleClick}>{text}</button>    
  )
}


export default Button;