class Mouse extends Enemy {
    constructor() {
        super("mouse")

        this.posx = 550
        this.posy = 300
    }

    public update():void {
        this.element.style.transform = `translate(${this.posx}px, ${this.posy}px)`
    }
}