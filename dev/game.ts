class Game {
    private static instance: Game

    private coins:number = 0
    private textfield:HTMLElement

    public enemies:Enemy[] = []

    private constructor(){
        this.textfield = document.getElementsByTagName("textfield")[0] as HTMLElement

        this.enemies.push(
            new Mouse()
        )

        this.gameLoop()
    }

    public static getInstance() {
        if(! Game.instance) {
            Game.instance = new Game()
        }
        return Game.instance
    }

    private gameLoop():void {
        for(let enemey of this.enemies) {
            enemey.update()
        }

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