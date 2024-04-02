import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import PlanetsList from './components/PlanetsList/PlanetsList';
import PlanetInfo from './PlanetInfo/PlanetInfo';
import Data from "./data.json";

function App() {

  const [planetClicked,setPlanetClicked] = useState(false);
  const [description,setDescription] = useState("overview")

  return (
    <>
    <Header setPlanetClicked={setPlanetClicked} planetClicked={planetClicked}/>
    {planetClicked===false?<PlanetsList planets={Data} setPlanetClicked={setPlanetClicked}/>:<PlanetInfo planet={Data[planetClicked-1]} description={description} setDescription={setDescription}/>}
    
    
    {/* <PlanetInfo id={planetClicked} planets={Data}/> */}
    {/* <PlanetsList planets={Data} setPlanetClicked={setPlanetClicked}/> */}
    </>
  )
}

export default App
