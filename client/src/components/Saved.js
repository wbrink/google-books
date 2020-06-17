import React, { useEffect, useState, useContext } from "react";
import API from "../utils/API";
import Button from "../components/Button";
import {BookContext} from "../App";

function Search(props) {

  const {saved, setSaved} = useContext(BookContext);
  console.log(saved);
  const showResults = () => {
    return (
      saved.map(el => {
        const id = el._id;
        const title = el.title;
        const authors = el.authors; // array
        const image = el.image;
        const description = el.description;
        const link = el.link;
        
        return(
          
          <div>
            <br/>
            {/* title */}
            <h3>{title}</h3>

            {/* authors */}
            {authors ? authors.map(el => {return(<h5>Written By: {el}</h5>)}) : "" }
            

            {/* thumbnail of book */}
            <img src={image} alt="image of book"/>

            {/* description */}
            <p>{description}</p>

            <Button id={id} title={title} authors={authors} description={description} image={image} link={link}/>
            <a href={link}>View</a>

            
            <br/>
            <hr/>
            <br/>
          </div>
        )
    })
    )
  }


  return (
    <div>
      {showResults()}
    </div>


    
  )
}


export default Search;