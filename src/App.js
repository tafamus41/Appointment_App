import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import CardContainer from './components/CardContainer';
import {data} from "./helper/data"
import React, { useState } from "react";

function App() {
  const [search,setSearch]=useState("");
  return (
    <div className="App">
      <Header onSearch={setSearch}  />
      <CardContainer search={search} nbaplayers={data}/>
    </div>
  );
}

export default App;
