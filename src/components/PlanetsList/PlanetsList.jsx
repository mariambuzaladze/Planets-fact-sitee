import "./planetsList.css";
import PlanetName from "../PlanetName/PlanetName";

import Mercury from "/images/planet-mercury.svg";
import Venus from "/images/planet-venus.svg";
import Earth from "/images/planet-earth.svg";
import Mars from "/images/planet-mars.svg";
import Jupiter from "/images/planet-jupiter.svg";
import Saturn from "/images/planet-saturn.svg";
import Uranus from "/images/planet-uranus.svg";
import Neptune from "/images/planet-neptune.svg";


export default function PlanetsList(){
    const planetNames = [
        {id:1, img:Mercury, text:"MERCURY"},
        {id:2, img:Venus, text:"VENUS"},
        {id:3, img:Earth, text:"EARTH"},
        {id:4, img:Mars, text:"MARS"},
        {id:5, img:Jupiter, text:"JUPITER"},
        {id:6, img:Saturn, text:"SATURN"},
        {id:7, img:Uranus, text:"URANUS"},
        {id:8, img:Neptune, text:"NEPTUNE"}
    ];



    return <div className="planet-list">
        {planetNames.map((planet)=>{
            return <PlanetName key={planet.id} planetImg={planet.img} planetText={planet.text}/>
        })}
    </div>
}