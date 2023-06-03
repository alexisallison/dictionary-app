import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded]= useState(false);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search() {
    let key = "baaf4089fe1f47ota3453bb84221f74b";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event){
        event.preventDefault();
search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load(){
    setLoaded(true);
    search();
  }

  if(loaded){return (
    <div className="Dictionary">
      <section>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for a word..."
          onChange={handleKeywordChange}
        />
        <input type="submit" placeholder="Search" id="submit" />
      </form></section>
      <Results results={results} />
    </div>
  );}
  else{
    load();
    return "Loading...";
  }

  
}
