import "./header.css"
import Hamburger from "/images/icon-hamburger.svg"

export default function Header({setPlanetClicked}){
    const handleHamburgerClick = ()=>{
        setPlanetClicked(false)
    }
    return <header>
        <h1>THE PLANETS</h1>
        <img onClick={handleHamburgerClick} className="hamburger" src={Hamburger} alt="icon hamburger" />
    </header>
}