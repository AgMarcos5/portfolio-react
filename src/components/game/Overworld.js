import { DirectionInput } from "./DirectionInput";
import { OverworldMap } from "./OverworldMap";
import { utils } from "./utils";

export class Overworld {

    constructor(config){
        this.canvas = config.element;
        this.navigate = config.navigate;

        this.ctx = this.canvas.getContext("2d");

        // Escenario
        this.map = null;

        //Puerta actual (oblivion-contacto-galeria-inicio)
        this.currentDoor = null;


    }


    startGameLoop(){
        const step = () => {

            this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);


            // Camara sobre el jugador
            const cameraPerson = this.map.gameObjects.hero;

            Object.values(this.map.gameObjects).forEach(object => {
                object.update({
                    arrow: this.directionInput.direction,
                    map: this.map,
                })
            })

            // draw lower layer
            this.map.drawLowerImage(this.ctx, cameraPerson);
            
            // Dibujar GameObjects
            Object.values(this.map.gameObjects).forEach(object => {
                object.sprite.draw(this.ctx, cameraPerson);
            })

            // draw upper layer
            this.map.drawUpperImage(this.ctx, cameraPerson);

            requestAnimationFrame( () =>{
                step();
            })
        }
        step();
    }

    bindHeroPositionCheck() {
        document.addEventListener("PersonWalkingComplete", e => {
            // Salió de una puerta
            if(this.currentDoor){
                utils.emitEvent("SalePuerta", {puerta : this.currentDoor});
                this.currentDoor = null;
                this.navigate("/");
            }

            // Se encuentra en una puerta
            if(this.map.checkEvent()){
                this.currentDoor = this.map.checkEvent();
                utils.emitEvent("EntraPuerta", {puerta : this.currentDoor});
                this.navigate(`/${this.currentDoor}`);
            }
        })
    }

    setPosition(name){
        let hero = this.map.gameObjects["hero"];
        if(this.currentDoor !== name){
            switch(name){
                case 'oblivion' : hero.changePosition(25,9);
                break;
                case 'contacto' : hero.changePosition(44,7);
                break;
                case 'galeria'  : hero.changePosition(45,16);
                break;
                case 'proyectos'  : hero.changePosition(12,14);
                break;
                default : hero.changePosition(16,17);
            }
        }
    }


    init(){

        // Inicia escenario
        this.map = new OverworldMap(window.OverworldMaps.DemoRoom);
        
        // Input teclado
        this.directionInput = new DirectionInput();
        this.directionInput.init();

        this.bindHeroPositionCheck(); 

        this.startGameLoop();
    }
}