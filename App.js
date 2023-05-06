
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import EffectTutorial from "./UseEffect/EffectTutorial";
import ReducerTutorial from "./UseReducer/ReducerTutorial";
// import StateTutorial from "./UseState/StateTutorial";
import ContextTutorial from "./UseContext/ContextTutorial";
import ImperativeHandle from "./UseImperativeHandle/ImperativeHandle";
import RefTutorial from "./UseRef/RefTutorial";
import MemoTutorial from "./UseMemo/MemoTutorial";
import CallBackTutorial from "./UseCallback/CallbackTutorial";

function App() {
  const [randomUserDataJson,SetRandomUserDataJson]= useState('')

 const  fetchRandomData =   ()=>{
  return axios.get('https://random-data-api.com/api/address/random_address')
  .then(data =>{
    console.log(data);
    console.log(data.data);
     const info =data.data;
     const imie = info.id;
     const country = info.country;
     return {imie,country};
 }).then(({imie,country})=>{
  SetRandomUserDataJson(country +' ' + imie);
 
 })
  .catch((error)=>{
    console.error(error);
  })
 }
 
 
  return (
    <>
      <button onClick={fetchRandomData}>
        zdobadz dane
      </button>
      <pre>
        {randomUserDataJson}
      </pre>
 
    </>
  );
}

export default App;



