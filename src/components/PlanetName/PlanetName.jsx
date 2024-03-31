import "./planetName.css";
import Chevron from "/images/icon-chevron.svg"

export default function PlanetName({planetImg, planetText}){
    return <div className="planet-name">
        <div className="planet">
        <img className="planet-icon" src={planetImg} alt="planet icon" />
        <p className="planet-text">{planetText}</p>
        </div>
        
        <img src={Chevron} alt="icon chevron" />
    </div>
}