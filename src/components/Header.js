import hand from "../img/hand.png"


function Header() {
    return (
        <header>
            <h1>¡Hola! 
            <img src={hand} className="hand" alt="hand"/>
            <br/> Mi nombre es <b>Marcos Agüero</b>.
            </h1>
            <p>Soy estudiante avanzado de ingeniería informática en la UNMDP y me desempeño como ilustrador freelance.
                Con el objetivo de capacitarme al máximo sobre el front end y desarrollo de videojuegos, áreas que realmente 
                me apasionan y donde puedo integrar mis conocimientos tanto de arte como de programación.
            </p>
        </header>
    )
}

export default Header;