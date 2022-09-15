export class DirectionInput {
    
    constructor(){
        // Direcciones retenidas
        this.heldDirections = [];

        this.map = {
            "ArrowUp" : "up",
            "KeyW" : "up",
            "ArrowDown" : "down",
            "KeyS" : "down",
            "ArrowLeft" : "left",
            "KeyA" : "left",
            "ArrowRight" : "right",
            "KeyD" : "right"
        }
    }

    get direction(){
        return this.heldDirections[0];
    }

    init(){
        document.addEventListener("keydown", e =>{
            if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
                e.preventDefault();
            }
            const dir = this.map[e.code];
            if(dir && this.heldDirections.indexOf(dir) === -1){
                
                this.heldDirections.unshift(dir);
            }
        });

        document.addEventListener("keyup", e =>{
            const dir = this.map[e.code];
            const index = this.heldDirections.indexOf(dir);
            if(index > -1){
                this.heldDirections.splice(index,1);
            }
        });
    }

}