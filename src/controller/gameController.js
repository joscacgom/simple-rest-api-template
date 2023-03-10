const gameService = require('../service/gameService');

const getAllGames = async (req, res) => {
    const {platform} = req.query;
    try{
        const allGames = gameService.getAllGames({platform});
        res.send({status: 200, data: allGames});
    } catch(err) {
        res.status(err?.status || 500).send({status: 500, error: err.message});
    }
};
    

const getGameById = async (req, res) => {
    const {params: {id}} = req;
    if(!id) {
        res.status(400).send({status: 400, error: 'id is required'});
    }
    try{
        const game = gameService.getGameById(id);
        res.status(200).send({status: 200, data: game});
    } catch(err) {
        res.status(err?.status || 500).send({status: 500, error: err.message});
    }
   
};

const postGame = async (req, res) => {
    const {body} = req;

    // Validate the request body
    if (!body.name || !body.platform) {
        res.status(400).send({status: 400, error: 'Missing name or platform'});
    }
    const newGame ={
        name: body.name,
        platform: body.platform,
    };
    try{
        const game = gameService.postGame(newGame);
        res.status(201).send({status: 201, data: game});
    } catch(err) {
        res.status(err?.status || 500).send({status: 500, error: err.message});
    }
   
};

const putGame = async (req, res) => {
    const {params: {id}, body} = req;
    if(!id) {
        res.status(400).send({status: 400, error: 'id is required'});
    }
    try{
        gameService.putGame(id, body);
        res.status(200).send({status: 200, data: body});
    } catch(err) {
        res.status(err?.status || 500).send({status: 500, error: err.message});
    }
   
};

const deleteGame = async (req, res) => {
    const {params: {id}} = req;
    if(!id) {
        res.status(400).send({status: 400, error: 'id is required'});
    }
    try{
        const game = gameService.deleteGame(id);
        res.status(200).send({status: 200, data: game});
    } catch(err) {
        res.status(err?.status || 500).send({status: 500, error: err.message});
    }
  
};

module.exports ={
    getAllGames,
    getGameById,
    postGame,
    putGame,
    deleteGame
}
