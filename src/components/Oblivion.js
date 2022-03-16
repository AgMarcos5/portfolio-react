import img_robot from "../img/sec-oblivion/robot.png"

import logo_godot from "../img/sec-oblivion/godot.png"
import logo_unmdp from "../img/sec-oblivion/unmdp.png"

import img_noticia1 from "../img/sec-oblivion/noticia1.jpg"
import img_noticia2 from "../img/sec-oblivion/noticia2.jpg"

import img_game1 from "../img/sec-oblivion/game_1.jpg"
import img_game2 from "../img/sec-oblivion/game_2.jpg"
import img_game3 from "../img/sec-oblivion/game_3.jpg"

import header_back from "../img/sec-oblivion/oblivion-header-back.jpg"
import header_front from "../img/sec-oblivion/oblivion-header-front.png"
import header_title from "../img/sec-oblivion/oblivion-header-title.png"

import obbg from "../img/sec-oblivion/game_4.jpg"

import { ParallaxBanner } from "react-scroll-parallax"
import { useEffect } from "react"

function Oblivion (props) {
    useEffect(props.executeScroll,[])
    return (
        <div className="info-container" id="secciones">
            <section id="oblivion-container">
                    
                

                <ParallaxBanner
                    layers={[
                        { image: header_back, speed: -20, disabled: true },
                        { image: header_title, speed: -5, translateY: [-30, -5] },
                        { image: header_front, speed: -15, translateY: [-15, -5] },
                    ]}
                    className="banner-parallax"
                >
                <div className="robot-container"><img id="robot" src={img_robot} alt="" /></div>
                </ParallaxBanner>
               
            <div className="oblivion-content">
                <div className="container">
                    <div> 
                        <article>
                            <p>Oblivion 3000 es un videojuego en desarrollo para dispositivos móviles, con lanzamiento previsto para el año 2022.
                                Su primer versión, realizada por <a href="https://www.linkedin.com/in/agueromarcos/"  target="_blank">Marcos Agüero</a>,  
                                <a href="https://www.linkedin.com/in/agustina-pieroni-41a1aa221/" target="_blank">Agustina Pieroni</a> y  
                                <a href="https://www.linkedin.com/in/lautaro-echeverria/" target="_blank">Lautaro Echeverría</a>, 
                                se encuentra disponible en 
                                <a href="https://play.google.com/store/apps/details?id=org.godotengine.oblivion" target="_blank">google play</a>.</p>   
                                <div className="logos">
                                    <img src={logo_godot} />
                                    <img src={logo_unmdp} />
                                </div>
                        </article>

                        <div className="noticia">
                            <div className="noticia_img"><img src={img_noticia1} alt="piazzolla" /></div>
                            <div className="noticia_text"><a
                                    href="https://www.lacapitalmdp.com/oblivion-3000-el-videojuego-que-fusiona-una-mar-del-plata-distopica-y-la-musica-de-piazzolla/" target="_blank">
                                    <h3>Oblivion 3000, el videojuego que fusiona una Mar del Plata distópica y la música de Piazzolla</h3>
                                    <p>Diario La Capital - 14 de septiembre de 2021 </p>
                                </a>
                            </div>
                        </div>
                        <br/>
                        <div className="noticia">
                            <div className="noticia_img"><img src={img_noticia2} alt="piazzolla" /></div>
                            <div className="noticia_text"><a
                                    href="https://www.lacapitalmdp.com/piazzolla-y-la-identidad-en-forma-de-videojuego/" target="_blank">
                                    <h3>Piazzolla y la identidad en forma de videojuego</h3>
                                    <p>Diario La Capital - 6 de noviembre de 2021 </p>
                                </a>
                            </div>
                        </div>
                        <br/>

                    </div>
                </div>
            </div> 
    
            <ParallaxBanner
                    layers={[
                        { image: obbg, speed: -10, translateY: [-20, 40]}
                    ]}
                    className="banner-parallax ob-bg"
                >
            </ParallaxBanner>
                
            <div className="oblivion-content footer" data-aos="fade-up"  data-aos-duration="2000">
                <div className="container">
                    <span className="frase">
                        <h1>“Tengo una ilusión: que mi obra se escuche en el 2020. <br/>Y en el 3000 también.”<br/><span>Astor Piazzolla.</span></h1>
                    </span>
                </div>
            </div>
            <div className="oblivion-gallery" data-aos="fade-up"  data-aos-duration="3000">
                <p> Corre el año 3000 y la humanidad ya no es la misma. Parece ser que un milenio es todo el tiempo que se necesita para olvidar. Entre tanto desperdicio, contaminación y vida artificial, poco prevalece de la realidad que alguna vez conocimos. Como por ejemplo el basural. </p>                     
                <div>
                    <img className="img-gal" src={img_game1} data-aos="zoom-in-right" />
                    <p>Robot lo prefiere así. Es que hace ya un tiempo pasa sus tardes entre los desechos, tratando de encontrar algo que lo ayude a sentir. No entiende porqué pero cada objeto inanimado del pasado lo llena de curiosidad, con la certeza de saber que algo más existió. Una tarde, con la poca luz que quedaba antes del anochecer, hurgó hasta la base de una de las montañas más altas y antiguas de basura. Resulta casi imposible de explicar pero creo que si le preguntan, él tampoco sabe porqué una valija mal conservada llamó su atención. Empujó un poco la chatarra que la mantenía cautiva y la arrastró hasta el poste de luz más cercano.</p>     
                </div>
                <div>
                    <p>La dificultad con la que se deslizaba el cierre le dió la pauta de la antigüedad de la pieza con la que se había cruzado. Sin dudarlo un segundo, se arrodilló y abrió la valija. Deslumbrado, pasó sus dedos por las dos reliquias que se escondían allí: Oblivion decía la caja. Entonces la tomó entre sus manos y sacó un gran círculo negro de adentro. Lo miró, lo movió y lo giró hasta que distinguió un pequeño agujero en el centro. En el momento exacto en que uno de sus dedos hizo contacto, comenzó a dar vueltas y una melodía salió de él.</p>
                    <img className="img-gal"  src={img_game2} data-aos="zoom-in-left"/>
                </div>
                <div>
                    <img className="img-gal"  src={img_game3} data-aos="zoom-in-right"/>
                    <p>Sensaciones que nunca supo que hubieran existido lo atravesaron por completo. El vacío en su interior se hizo más notorio aunque amalgamado por la nostalgia y la esperanza, las emociones fueron tales que tuvo que dejarse llevar por los minutos que duró la pieza. Y luego, el vacío nuevamente. Pero esta vez cargado del recuerdo de las emociones que pudo sentir. Robot se quedó congelado por un momento, hasta que volvió a hacer girar el disco. No podía creer que el resto de la humanidad se estuviera perdiendo de sentir así. Tenía que hacer algo.</p>
                </div>     
            </div>
        </section>

        </div>
    )
}

export default Oblivion;