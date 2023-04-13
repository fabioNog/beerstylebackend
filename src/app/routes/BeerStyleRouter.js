const BeerStyleRouter = require('express').Router();
const BeerStyleController = require('../controllers/BeerStyleController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

//CRUD -> CREATE, READ, UPDATE AND DELETE
BeerStyleRouter.post('/beerstyle', BeerStyleController.create);
BeerStyleRouter.get('/beerstyle', BeerStyleController.read);

BeerStyleRouter.patch('/beerstyle_temperature', async (req, res) => {
    const { temperature } = req.body;
    if (!temperature) {
      return res.status(400).send('Temperature is required.');
    }
  
    const beerStyle = await BeerStyleController.findBeerStyleByTemperature(temperature);
  
    return beerStyle;
  });

  BeerStyleRouter.delete('/beerstyle', BeerStyleController.deleteAll);


// BeerStyleRouter.patch('/beerstyle/:id', BeerStyleController.update);

// BeerStyleRouter.delete('/beerstyle/:id', BeerStyleController.delete);

module.exports = BeerStyleRouter;
