import "./header.css"
import Hamburger from "/images/icon-hamburger.svg"

export default function Header(){
    return <header>
        <h1>THE PLANETS</h1>
        <img className="hamburger" src={Hamburger} alt="icon hamburger" />
    </header>
}