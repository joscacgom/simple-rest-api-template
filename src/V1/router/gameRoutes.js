const express= require('express');
const gameController = require('../../controller/gameController');

const router = express.Router();
/**
 * @openapi
 * /api/v1/games:
 *   get:
 *     tags:
 *       - Games
 *     parameters:
 *       - in: query
 *         name: platform
 *         schema:
 *           type: string
 *         description: The platform of the game
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Game"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */
router.get('/', (req, res) => {
    gameController.getAllGames(req, res);
    });


/**
 * @openapi
 * /api/v1/games/{id}:
 *   get:
 *     tags:
 *       - Games
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         description: The id of the game
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Game"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */
router.get('/:id', (req, res) => {
    gameController.getGameById(req, res);
    });

router.post('/', (req, res) => {
    gameController.postGame(req, res);    
    });

router.put('/:id', (req, res) => {
    gameController.putGame(req, res);
    });

router.delete('/:id', (req, res) => {
    gameController.deleteGame(req, res);
    });

module.exports = router;


