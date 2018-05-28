abstract class Enemy {

    protected element:HTMLElement
    public posy:number = 0
    public posx:number = 0

    
    constructor(element:string) {
        this.element = document.createElement(element)
        let foreground = document.getElementsByTagName("foreground")[0]

        foreground.appendChild(this.element)
    }

    abstract update():void
}