const Game = require('../db/Game');
const {v4:uuid} = require('uuid');

const getAllGames= (filterParams) => {
    return Game.getAllGames(filterParams);
};

const getGameById = (id) => {
    return Game.getGameById(id);
};

const postGame = (newGame) => {
    const gameToAdd = {
        id: uuid(),
        ...newGame
    };
    Game.postGame(gameToAdd);
    return gameToAdd;

};

const putGame = (id, game) => {
    const gameToUpdate = {
        id,
        ...game
    };
    Game.putGame(id, gameToUpdate);
    return gameToUpdate;
};

const deleteGame = (id) => {
    return Game.deleteGame(id);
};

module.exports={
    getAllGames,
    getGameById,
    postGame,
    putGame,
    deleteGame
}