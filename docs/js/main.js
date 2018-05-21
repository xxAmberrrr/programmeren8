"use strict";
var Game = (function () {
    function Game() {
        this.coins = 0;
        this.textfield = document.getElementsByTagName("textfield")[0];
        this.gameLoop();
    }
    Game.getInstance = function () {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    };
    Game.prototype.gameLoop = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.score = function () {
        this.coins++;
        this.textfield.innerHTML = "Score: " + this.coins;
    };
    return Game;
}());
window.addEventListener("load", function () {
    Game.getInstance();
});
//# sourceMappingURL=main.js.map