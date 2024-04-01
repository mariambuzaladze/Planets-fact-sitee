import "./planetsList.css";
import PlanetName from "../PlanetName/PlanetName";


export default function PlanetsList({planets, setPlanetClicked}){

    return <div className="planet-list">
        {planets.map((planet)=>{
            return <PlanetName key={planet.id} planetId={planet.id} planetImg={planet.img} planetText={planet.name} setPlanetClicked={setPlanetClicked}/>
        })}
    </div>
}