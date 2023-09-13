import {useState} from "react";
import {useEffect} from "react";
import './App.css';

function App() {
  //start of api for fetching excuses
  const [cat, setCat] =useState("")
  const [exc, setExc] = useState("");
  const fam =(prop)=>{
    fetch(`https://excuser-three.vercel.app/v1/excuse/${prop}`)
    .then((res)=>res.json())
    .then((json)=>{setExc(json[0].excuse);setCat(json[0].category)})
  }
  return (
    <>
    <button onClick={()=>{fam("family")}}>family</button><br />
    <button onClick={()=>{fam("college")}}>college</button><br />
    <button onClick={()=>{fam("party")}}>party</button><br />
    <p>{`${cat}`}</p>
    <p>{`${exc}`}</p>
    </>
   // end of api for fetching excuses
      
  );
}

export default App;
