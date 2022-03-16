
function Section (props) {

    return (
        <section className="section-container">
            <div className="container">
                <span className="frase"><h1>{props.title}</h1></span>
                <div className="separator"></div>
                <br/>
                {props.children}
                <br/>  
                <div className="separator"></div>
                <br/>  
            </div>
        </section>
    )
}

export default Section;