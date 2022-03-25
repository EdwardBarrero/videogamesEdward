const { Router } = require("express");
const { Videogame, Genr } = require("../db.js");

const router = Router();

router.get("/", (req, res, next) => {
  return Videogame.findAll({
      include: Genr
  })
    .then((videogame) => res.send(videogame))
    .catch((error) => next(error));
});

router.post("/", (req, res, next) => {
  const { name, description, rating, platforms } = req.body;
  return Videogame.create({
    name,
    description,
    rating,
    platforms,
  })
    .then((videogame) => res.send(videogame))
    .catch((error) => next(error));
});

router.post("/:videogameId/genr/:genrId", async (req, res, next) => {
  try {
    const { videogameId, genrId } = req.params;
    const videogame = await Videogame.findByPk(videogameId);
    await videogame.addGenr(genrId);
    res.send(200);
  } catch (error) {
    next(error);
  }
});

router.put("/", (req, res, next) => {
  res.send("soy put /videogames");
});

router.delete("/", (req, res, next) => {
  res.send("soy delete /videogames");
});

module.exports = router;
