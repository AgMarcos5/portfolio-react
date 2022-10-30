import hand from "../img/hand.png"


function Header() {
    return (
        <header>
            <h1>¡Hola! 
            <img src={hand} className="hand" alt="hand"/>
            <br/> Mi nombre es <b>Marcos Agüero</b>.
            </h1>
            <p style={{color:"white"}}>Frontend developer | Ilustrador</p>
            <p style={{color:"#ababab"}}>Con el objetivo de capacitarme al máximo sobre el front end y desarrollo de videojuegos, áreas que realmente 
                me apasionan y donde puedo integrar mis conocimientos tanto de arte como de programación.
            </p>
        </header>
    )
}

export default Header;