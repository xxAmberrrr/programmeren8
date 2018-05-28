class Spider extends Enemy {
    constructor() {
        super("spider")

        this.posx = 300
        this.posy = 300
    }

    public update():void {
        this.element.style.transform = `translate(${this.posx}px, ${this.posy}px)`
    }
}