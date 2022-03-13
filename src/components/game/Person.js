import { GameObject } from "./GameObject";
import { utils } from "./utils";

export class Person extends GameObject{
    constructor(config){
        super(config);

        // Indica cuánto le falta por recorrer al personaje
        this.movingProgressRemaining = 0;
        // Jugador
        this.isPlayerControlled = config.isPlayerControlled || false;
        
        this.directionUpdate = {
            "up": ["y", -1],
            "down": ["y",1],
            "left": ["x",-1],
            "right": ["x",1]
        }
    }

    changePosition(x,y){
        this.x = utils.withGrid(x);
        this.y = utils.withGrid(y);
        utils.emitEvent("PersonWalkingComplete", {});
    }

    update(state){
        if(this.movingProgressRemaining > 0){
            this.updatePosition();
        } else{
            // teclado libre y presionamos una flecha
            if(this.isPlayerControlled && state.arrow){
                this.startBehavior(state, {
                    type: "walk",
                    direction: state.arrow
                })
            }
            this.updateSprite();
        }
    }

    // comenzar acción
    startBehavior(state,behavior){
        this.direction = behavior.direction;
        if(behavior.type === "walk"){
            if(state.map.isSpaceTaken(this.x,this.y,this.direction)){
                return;
            }
            this.movingProgressRemaining = 16;
        }
    }

    updatePosition(){
            const [property, change] = this.directionUpdate[this.direction];
            this[property] += change;
            this.movingProgressRemaining--;

            if (this.movingProgressRemaining === 0) {
                // Terminó de caminar
                utils.emitEvent("PersonWalkingComplete", {})
            }

    }

    updateSprite(){
        if(this.movingProgressRemaining > 0){
            this.sprite.setAnimation("walk-"+this.direction);
            return;
        }
        this.sprite.setAnimation("idle-"+this.direction);
        
    }

    

}