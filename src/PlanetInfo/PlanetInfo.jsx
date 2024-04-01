import "./planetInfo.css";
import Source from "/images/icon-source.svg"

export default function PlanetInfo({planet}){
    return <div className="info">
        <div className="filters">
            <p className="filter-text">OVERVIEW</p>
            <p className="filter-text">STRUCTURE</p>
            <p className="filter-text">SURFACE</p>
        </div>

        <img className="planetImg" src={planet.img} alt="planet image" />
        <h2>{planet.name}</h2>
        <p className="description">{planet.overview}</p>
        <p className="source">Source : <a href="">Wikipedia</a><img src={Source} alt="icon source" /></p>

         
        <div className="containers">
            <div className="container">
                <p className="text">ROTATION TIME</p>
                <p className="numbers">{planet.rotation}</p>
            </div>

            <div className="container">
                <p className="text">REVOLUTION TIME</p>
                <p className="numbers">{planet.revolution}</p>
            </div>

            <div className="container">
                <p className="text">RADIUS</p>
                <p className="numbers">{planet.radius}</p>
             </div>

            <div className="container">
                <p className="text">AVRAGE TEMP.</p>
                <p className="numbers">{planet.temp}</p>
             </div>
        </div>
    </div>
}