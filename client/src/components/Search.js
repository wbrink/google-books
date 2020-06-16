import React, { useEffect, useState } from "react";
import API from "../utils/API";

function Search(props) {
  const [results, setResults] = useState(false);
  const [search, setSearch] = useState();

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
        return(
          <div>
            <h3>{el.volumeInfo.title}</h3>
            {el.volumeInfo.subtitle ? <h5>{el.volumeInfo.subtitle}</h5> : "" }
            {el.volumeInfo.authors.map(el => {
              return(<h5>Written By: {el}</h5>)
            })}
            <img src={el.volumeInfo.imageLinks.thumbnail} alt="image of book"/>
            <p>{el.volumeInfo.description}</p>
            
            <br/>
            <br/>
          </div>
        )
    })
    )
  }


  return (
    <div>
      <input type="text" placeholder="Search Title Here" onChange={(e) => setSearch(e.target.value)} />
      <button onClick={handleSearchClick}>Search</button>
      <hr/>

      {
        results === false 
          ? <div>Results will SHow here</div> 
          : <div>{showResults()}</div>
      }
    </div>


    
  )
}


export default Search;