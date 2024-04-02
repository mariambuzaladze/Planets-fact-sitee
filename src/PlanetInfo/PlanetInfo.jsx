import "./planetInfo.css";
import Source from "/images/icon-source.svg"

export default function PlanetInfo({planet,description,setDescription,planets,setPlanetClicked}){
    const handleOverview = ()=>{
        setDescription("overview")
    }

    const handleStructure = ()=>{
        setDescription("structure")
    }

    const handleSurface = ()=>{
        setDescription("surface")
    }

    const getDescription = () => {
        switch (description) {
            case "overview":
                return planet.overview.content;
            case "structure":
                return planet.structure.content;
            case "surface":
                return planet.geology.content;
        }
    };

    const getImage = () =>{
        switch (description) {
            case "overview":
                return planet.images.planetImg;
            case "structure":
                return planet.images.internal;
            case "surface":
                return planet.images.geology;
        }
    }

    const getSources = () => {
        switch (description) {
            case "overview":
                return planet.overview.source;
            case "structure":
                return planet.structure.source;
            case "surface":
                return planet.geology.source;
        }
    }

    const getPlanetNames = () =>{
        return planets.map((planet)=>{
            return <p onClick={() => handleNameClick(planet.id)} key={planet.id} className="planet-name">{planet.name}</p>
        })
    }
    const handleNameClick = (id) => {
        setPlanetClicked(id)
    }
    return <div className="info">
        <div className="planet-names-div">{getPlanetNames()}</div>

        <div className="filters">
            <p style={description==="overview"?{"borderBottom":"4px solid #419ebb"}:{}} onClick={handleOverview} className="filter-text">OVERVIEW</p>
            <p style={description==="structure"?{"borderBottom":"4px solid #419ebb"}:{}} onClick={handleStructure}className="filter-text">STRUCTURE</p>
            <p style={description==="surface"?{"borderBottom":"4px solid #419ebb"}:{}} onClick={handleSurface}className="filter-text">SURFACE</p>
        </div>

        <div className="content">
            <img className="planetImg" src={getImage()} alt="planet image" />

            <div className="text-div">
                <h2>{planet.name}</h2>
                <p className="description">{getDescription()}</p>
                <p className="source">Source : <a href={getSources()}>Wikipedia</a><img src={Source} alt="icon source" /></p>
            </div>
        </div>
        
        

         
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
                <p className="numbers">{planet.temperature}</p>
             </div>
        </div>
    </div>
}