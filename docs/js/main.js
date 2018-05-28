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
    function Enemy(element) {
        this.posy = 0;
        this.posx = 0;
        this.element = document.createElement(element);
        var foreground = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(this.element);
    }
    return Enemy;
}());
var Game = (function () {
    function Game() {
        this.coins = 0;
        this.enemies = [];
        this.textfield = document.getElementsByTagName("textfield")[0];
        this.enemies.push(new Mouse());
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
        for (var _i = 0, _a = this.enemies; _i < _a.length; _i++) {
            var enemey = _a[_i];
            enemey.update();
        }
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
        var _this = _super.call(this, "mouse") || this;
        _this.posx = 550;
        _this.posy = 300;
        return _this;
    }
    Mouse.prototype.update = function () {
        this.element.style.transform = "translate(" + this.posx + "px, " + this.posy + "px)";
    };
    return Mouse;
}(Enemy));
var Spider = (function (_super) {
    __extends(Spider, _super);
    function Spider() {
        var _this = _super.call(this, "spider") || this;
        _this.posx = 300;
        _this.posy = 300;
        return _this;
    }
    Spider.prototype.update = function () {
        this.element.style.transform = "translate(" + this.posx + "px, " + this.posy + "px)";
    };
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