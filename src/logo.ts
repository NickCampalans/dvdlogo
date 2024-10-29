export class Logo {
    x: number;
    y: number;
    w: number;
    h: number;
    imageURL: string;
    vx: number;
    vy: number;

    image: HTMLImageElement;

    constructor (factor: number = 1.0) {
        this.x = 100;
        this.y = 100;
        this.w = 50 * factor;
        this.h = 50 * factor;
        this.imageURL = "assets/dvd.svg";
        this.image = new Image();
        this.image.src = this.imageURL;
        this.image.onload = () => {
            this.w = this.image.width * factor;
            this.h = this.image.height * factor;
        }
        this.vx = (Math.random() * 400.0) - 200.0;
        this.vy = (Math.random() * 400.0) - 200.0;
    }

    update(dT: number, cw: number, ch: number) {

        let newX = this.x + this.vx * dT;
        let newY = this.y + this.vy * dT;

        if(newX < 0){
            newX = 0;
            this.vx = -this.vx;
        } 

        if(newY < 0){
            newY = 0;
            this.vy = -this.vy;
        } 

        if((newX+this.w) > cw){
            newX = cw - this.w;
            this.vx = -this.vx;
        } 

        if((newY+this.h) > ch){
            newY = ch - this.h;
            this.vy = -this.vy;
        } 

        this.x = newX;
        this.y = newY;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    }
}