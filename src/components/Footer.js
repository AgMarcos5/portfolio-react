import keys1 from "../img/keys1.png"
import keys2 from "../img/keys2.png"

function Footer () {
    return (
        <section className="section-container">
            <div className="container">
                <p className="game-rules">Descubre mi portafolio jugando. Utiliza
                <img src={keys1} className="keys"/>
                o
                <img src={keys2} className="keys"/>
                para moverte.
                </p>
            </div>
        </section>
    )
}

export default Footer;