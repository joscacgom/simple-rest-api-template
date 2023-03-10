const DB = require('./db');
const utils = require('./utils');
/**
 * @openapi
 * components:
 *   schemas:
 *     Game:
 *       type: object
 *       properties:
 *         id: 
 *           type: string
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         name: 
 *           type: string
 *           example: Warhawk 
 *         platform:
 *           type: string
 *           example: Playstation 3
 *         
 */

const getAllGames = (filterParams) => {
    try{
        const games= DB.games;
        if(filterParams){
            const {platform} = filterParams;
            if(platform){
                return games.filter((g) => g.platform.toLowerCase().includes(platform.toLowerCase()));
            }
        }
        return games;

    }catch(err){
        throw {
            status: 500,
            message: 'Internal server error'
        }
    }
    return DB.games;
};

const getGameById = (id) => {
    try{
        const game = DB.games.find((g) => g.id == id);
        if(!game) {
            throw {
                status: 404,
                message: 'Game not found'
            } 
        }
        return game ;
    } catch(err) {
        throw {
            status: 500,
            message: 'Internal server error'
        }
    }
    
};

const postGame = (game) => {
    try{
        const alreadyAdded = DB.games.findIndex((g) => g.name === game.name);
        console.log(alreadyAdded)

        if (alreadyAdded > -1) {
            throw {
                status: 400,
                message: 'Game already added'
            }
        }

        DB.games.push(game);
        utils.saveToDb(DB);
    
    
        return game;
    } catch(err) {
        throw {
            status: 500,
            message: 'Internal server error'
        }
    }
   
}

const putGame = (id, game) => {
    try{
        const gameToUpdate = DB.games.find((g) => g.id == id);
        if(!gameToUpdate) {
        throw {
                status: 404,  
                message: 'Game not found'
        }
        }
        gameToUpdate.name = game.name;
        utils.saveToDb(DB);
        return gameToUpdate;
    } catch(err) {
        throw {
            status: 500,
            message: 'Internal server error'
        }
    }
    
};

const deleteGame =(id) => {
    try{
        const gameToDelete = DB.games.find((g) => g.id == id);
        if(!gameToDelete) {
            throw {
                status: 404,
                message: 'Game not found'
            }
        }
        DB.games = DB.games.filter((g) => g.id != id);
        utils.saveToDb(DB);
        return gameToDelete;
    } catch(err){
        throw {
            status: 500,
            message: 'Internal server error'
        }
    }
  
};


module.exports = {
    getAllGames,
    postGame,
    getGameById,
    putGame,
    deleteGame
};