import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    console.log(props.results);
    return (
      <div className="Results">
        <section>
        <h2>{props.results.word}</h2>
        <h5 id="phonetic">/{props.results.phonetic}/</h5></section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <section>
              <Meaning meaning={meaning} /></section>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
