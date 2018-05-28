"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Enemy = (function () {
    function Enemy() {
    }
    Enemy.prototype.performAttackBehaviour = function () {
    };
    Enemy.prototype.setAttackBehaviour = function () {
    };
    return Enemy;
}());
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
var Mouse = (function (_super) {
    __extends(Mouse, _super);
    function Mouse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Mouse;
}(Enemy));
var Spider = (function (_super) {
    __extends(Spider, _super);
    function Spider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Spider;
}(Enemy));
var EasyAttack = (function () {
    function EasyAttack() {
    }
    EasyAttack.prototype.attack = function () {
    };
    return EasyAttack;
}());
var MediumAttack = (function () {
    function MediumAttack() {
    }
    MediumAttack.prototype.attack = function () {
    };
    return MediumAttack;
}());
//# sourceMappingURL=main.js.map