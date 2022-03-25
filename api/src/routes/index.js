const { Router } = require('express');
const genresRoute= require('./genres');
const videogamesRoute = require('./videogames');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use('/videogames', videogamesRoute);
router.use('/genres', genresRoute);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
