import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos.js";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded]= useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handleImagesResponse(response){
    setPhotos(response.data.photos);
  }

  function search() {
    let key = "baaf4089fe1f47ota3453bb84221f74b";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const imagesApiKey = "baaf4089fe1f47ota3453bb84221f74b";
    let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imagesApiKey}`;
    axios.get(imagesApiUrl).then(handleImagesResponse);
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
      <h1>What word would you like to discover?</h1>
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
      <Photos photos={photos} />
    </div>
  );}
  else{
    load();
    return "Loading...";
  }

  
}
