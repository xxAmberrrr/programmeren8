class Game {
    private static instance: Game

    private coins:number = 0
    private textfield:HTMLElement

    private constructor(){
        this.textfield = document.getElementsByTagName("textfield")[0] as HTMLElement

        this.gameLoop()
    }

    public static getInstance() {
        if(! Game.instance) {
            Game.instance = new Game()
        }
        return Game.instance
    }

    private gameLoop():void {
        requestAnimationFrame(() => this.gameLoop())
    }

    public score() {
        this.coins ++
        this.textfield.innerHTML = "Score: " + this.coins
    }
}

window.addEventListener("load", () => {
    Game.getInstance()
})