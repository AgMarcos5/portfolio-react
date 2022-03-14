import Section from "./Section";

import video_header from "../img/sec-galeria/video.mp4"

import img_1 from "../img/sec-galeria/1.jpg"
import img_2 from "../img/sec-galeria/2.jpg"
import img_3 from "../img/sec-galeria/3.jpg"
import img_4 from "../img/sec-galeria/4.jpg"
import img_5 from "../img/sec-galeria/5.jpg"

function Galeria () {
    return (
        <section className="section-container">
            <div className="container">
                
            <div className="video-wrapper">
                <video playsInline autoPlay muted loop>
                  <source src={video_header} type="video/webm" />
                </video>
                <div className="gal-title">
                    <h1>Galería</h1>
                    <h3>Algunos de los trabajos que he realizado como ilustrador</h3>
                </div>
            </div>
            
            <div className="img-container">
                <div className="row">
                    <div className="column">
                        <figure><img src={img_1}/></figure>
                        <figure> <img src={img_3}/></figure>
                    </div>
                    <div className="column">
                        <figure><img src={img_2}/></figure>
                        <figure><img src={img_4}/></figure>
                    </div>
                </div>
                <figure><img src={img_5}/></figure>
            </div>
            <br/>

            </div>
        </section>
    )
}

export default Galeria;