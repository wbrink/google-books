import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Button from "../components/Button";

function Search(props) {
  const [results, setResults] = useState(false);
  const [search, setSearch] = useState("");

  const searchGoogle = (title) => {
    API.getBook(title)
      .then(res => res.json()) 
      .then(data => {
        setResults(data);
      })
  }

  const handleSearchClick = () => {
    searchGoogle(search);
  }

  
  useEffect(() => {

    API.getBook("harry potter")
      .then(res => res.json()) 
      .then(data => {
        console.log(data);
      })
  }, []);

  const showResults = () => {
    return (
      results.items.map(el => {
        const id = el.id;
        const title = el.volumeInfo.title;
        const subtitle = el.volumeInfo.subtitle;
        const authors = el.volumeInfo.authors; // array
        const image = el.volumeInfo.imageLinks.thumbnail;
        const description = el.volumeInfo.description;
        const link = el.volumeInfo.infoLink;
        
        return(
          
          <div>
            <br/>
            {/* title */}
            <h3>{title}</h3>

            {/* subtitle */}
            {subtitle ? <h5>{subtitle}</h5> : "" }

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
      <input type="text" placeholder="Search Title Here" onChange={(e) => setSearch(e.target.value)} value={search} />
      <button onClick={handleSearchClick}>Search</button>
      <hr/>

      {
        results === false 
          ? <div>Results will Show here</div> 
          : <div>{showResults()}</div>
      }
    </div>


    
  )
}


export default Search;