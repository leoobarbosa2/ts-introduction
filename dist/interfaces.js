"use strict";
// Conjunto de dados para descrever a estrutura de um objeto
var tlof = {
    title: 'The last of us',
    description: 'A good game with good experience',
    genre: 'Action',
    platform: ['PS3', 'PS4'],
    getSimilars: function (title) {
        console.log("similar games to " + title + ": Uncharted, Metro");
    }
};
console.log(tlof.genre);
// tlof.genre = 'new'
if (tlof.getSimilars) {
    tlof.getSimilars(tlof.title);
}
var leftBehind = {
    title: 'The last of Us - Left Behind',
    description: 'You play as Ellie before the original game',
    genre: 'Action',
    originalGame: tlof,
    newContent: ['3 hour story', 'new characters']
};
var CreateGame = /** @class */ (function () {
    function CreateGame(t, d, g, p) {
        this.title = t;
        this.description = d;
        this.genre = g;
        this.platform = p;
    }
    return CreateGame;
}());
