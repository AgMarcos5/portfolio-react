import { utils } from "./utils";

export class Sprite{
    constructor(config){
        // Referencia del gameObject
        this.gameObject = config.gameObject;

        // Imagen del sprite
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        }

        // Sombra
        this.shadow = new Image();
        this.useShadow = true;
        if(this.useShadow){
            this.shadow.src = "../img/characters/shadow.png"
        }
        this.shadow.onload = () => {
            this.isShadowLoaded = true;
        }
       

        // Animaciones
        this.animation = config.animations || {
            "idle-down" : [ [0,0] ],
            "idle-right": [ [0,1] ],
            "idle-up"   : [ [0,2] ],
            "idle-left" : [ [0,3] ],
            "walk-down" : [ [1,0],[0,0],[3,0],[0,0] ],
            "walk-right": [ [1,1],[0,1],[3,1],[0,1] ],
            "walk-up"   : [ [1,2],[0,2],[3,2],[0,2] ],
            "walk-left" : [ [1,3],[0,3],[3,3],[0,3] ]
        }

        // animación y frame actual
        this.currentAnimation = config.currentAnimation || "idle-down";
        this.currentAnimationFrame = 0;

        // duración de cada frame
        this.animationFrameLimit = config.animationFrameLimit || 4;
        this.animationFrameProgress = this.animationFrameLimit;

        
    }

    // retorna el frame actual, por ejemplo [3,0]
    get frame(){
        return this.animation[this.currentAnimation][this.currentAnimationFrame]
    }

    setAnimation(key){
        if(this.currentAnimation !== key){
            this.currentAnimation = key;
            this.currentAnimationFrame = 0;
            this.animationFrameProgress = this.animationFrameLimit;
        }
    }

    updateAnimationProgress(){
        // decrementa el contador
        if(this.animationFrameProgress > 0){
            this.animationFrameProgress--;
            return;
        }
        // si es cero, lo resetea y avanza al siguiente frame
        this.animationFrameProgress = this.animationFrameLimit;
        this.currentAnimationFrame++;
        // fin de lista
        if(this.frame === undefined){
            this.currentAnimationFrame = 0;
        }
    }



    draw(ctx, cameraPerson){
        const x = this.gameObject.x  -8 + utils.withGrid(12) - cameraPerson.x;
        const y = this.gameObject.y  -18 + utils.withGrid(6) - cameraPerson.y;

        this.isShadowLoaded && ctx.drawImage(this.shadow, x, y);

        // frame actual
        const [frameX, frameY] = this.frame;

        this.isLoaded && ctx.drawImage(this.image,
            frameX*32, frameY*32,
            32,32,
            x,y,
            32,32
        )

        this.updateAnimationProgress();
    }

}