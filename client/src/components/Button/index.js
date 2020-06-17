import React, { useState } from "react";
import API from "../../utils/API";

function Button({id, title, authors, description, image, link}) {
  const [text, setText] = useState("Save");

  const handleClick = () => {
    if (text === "Save") {
      // then save the book
      API.saveBook(id, title, authors, description, image, link)
      .then(res => res.json())
      .then(data=> {
        console.log(data);
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