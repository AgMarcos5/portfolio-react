import Section from "./Section";
import CodersRankActivity from '@codersrank/activity';

import img_pokedex from "../img/sec-proyectos/pr_pokedex.jpg"
import img_oblivion from "../img/sec-proyectos/pr_oblivion.jpg"
import img_portfolio from "../img/sec-proyectos/pr_portfolio.jpg"
import img_rps from "../img/sec-proyectos/pr_rps.jpg"
import img_qrcode from "../img/sec-proyectos/pr_qrcode.jpg"


window.customElements.define('codersrank-activity', CodersRankActivity);

function PrCard (props) {
    return (
        <div className="pr-element">
            <div className="pr-image" style={{ backgroundImage: `url(${props.image})` }}>
            </div>
            <div className="pr-info">
                <h2>{props.title}</h2>
                {props.description}
                <div className="pr-footer">
                    <div className="pr-tags">
                        {props.tags}
                    </div>
                    <div className="links">
                        {props.links}
                    </div>
                </div>
            </div>
        </div>
    )
}

function Tag({name,color}){
    return (
        <span className={`tag ${color}`}>{name}</span>
    )
}



function Proyectos () {
    return (
        <div>
            <Section title="Proyectos">
                
                <PrCard title="Pokedex" 
                description={
                    <p>Pokedex desarrollada utilizando React.Js y consumiendo la API de <a href="https://pokeapi.co">pokeapi.co</a></p>
                    }
                image={img_pokedex}
                tags={<>
                    <Tag name="React" color="re"/> 
                    <Tag name="Api"/> 
                    <Tag name="Responsive Design"/>
                    </>}
                links={<>
                    <a href="https://agmarcos5.github.io/pokedex/" className="demo" target="_blank">Demo</a>   
                    <a href="https://github.com/AgMarcos5/pokedex" target="_blank">Ver en github</a>
                    </>}
                />

                <PrCard title="Rock - Paper - Scissors" 
                description={
                    <p>Challenge de frontend mentor. Clásico juego del piedra, papel o tijeras desarrollado en React.</p>
                    }
                image={img_rps}
                tags={<>
                    <Tag name="React" color="re"/> 
                    <Tag name="Sass" color="sass"/> 
                    <Tag name="Responsive Design"/>
                    </>}
                links={<>
                    <a href="https://agmarcos5.github.io/challenge-rock-paper-scissors/" className="demo" target="_blank">Demo</a>   
                    <a href="https://github.com/AgMarcos5/challenge-rock-paper-scissors" target="_blank">Ver en github</a>
                    </>}
                />


                <PrCard title="Oblivion 3000" 
                description={
                    <p>Videojuego desarrollado para la cátedra de ingeniería de videojuegos en la UNMDP, utilizando el motor de Godot. 
                            Actualmente continúo el proyecto como trabajo final de la carrera.
                    </p>
                    }
                image={img_oblivion}
                tags={<>
                    <Tag name="Godot"/> 
                    <Tag name="GDScript"/> 
                    </>}
                links={<>
                    <a href="https://play.google.com/store/apps/details?id=org.godotengine.oblivion" className="demo" target="_blank">Google Play</a>   
                    <a href="https://github.com/AgMarcos5/Oblivion-3000" target="_blank">Ver en github</a>
                    </>}
                />

                <PrCard title="Portfolio" 
                description={
                    <p>Este mismo sitio fue desarrollado utilizando React</p>
                    }
                image={img_portfolio}
                tags={<>
                    <Tag name="React" color="re"/> 
                    <Tag name="React router"/> 
                    <Tag name="Canvas"/>
                    </>}
                links={<>
                    <a href="https://github.com/AgMarcos5/portfolio-react" target="_blank">Ver en github</a>
                    </>}
                />


                <PrCard title="QR Code" 
                description={
                    <p>Challenge de frontend mentor. Tarjeta de código QR.</p>
                    }
                image={img_qrcode}
                tags={<>
                    <Tag name="HTML" color="ht"/> 
                    <Tag name="CSS" color="cs"/> 
                    </>}
                links={<>
                    <a href="https://agmarcos5.github.io/challenge-qr-code/" className="demo" target="_blank">Demo</a>   
                    <a href="https://github.com/AgMarcos5/challenge-qr-code" target="_blank">Ver en github</a>
                   </>}
                />


                <div className="link">
                    <a href="https://github.com/AgMarcos5" target="_blank">
                        Ver más en 
                        <span className="icon-fondo">
                            <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path>
                            </svg>
                        </span>
                        <span>/AgMarcos5 </span>
                    </a>
                </div>

                <div className="tec">
                    <h3>
                        Algunos de los lenguajes de programación, herramientas y otras tecnologías con las que he tenido contacto y continúo aprendiendo: 
                    </h3>
                    <Tag name="HTML" color="ht"/>
                    <Tag name="CSS" color="cs"/>  
                    <Tag name="Javascript" color="js"/> 
                    <Tag name="Sass" color="sass"/> 
                    <Tag name="Bootstrap"/> 
                    <Tag name="Godot"/>
                    <Tag name="GDScript"/>  
                    <Tag name="Unity"/>
                    <Tag name="React.js" color="re"/>
                    <Tag name="Node.js" color="nd"/>
                    <Tag name="Express.js"/>
                    <Tag name="C"/>
                    <Tag name="C++"/>
                    <Tag name="Java"/>    
                    <Tag name="Photoshop"/>
                    <Tag name="Clip Studio Paint"/>
                    <Tag name="Aseprite"/>   
                    <Tag name="Git"/>
                    <Tag name="Github"/>
                    <Tag name="MySql"/>
                    <Tag name="Oracle DB"/>    
                </div>

                <br/>
                <codersrank-activity  className="github_act" username="agmarcos5" legend="false" labels tooltip step="5" ></codersrank-activity>
                <br/>

            </Section>
        </div>
    )
}

export default Proyectos;