const { Router } = require("express");
const { Genr, Videogame } = require("../db");
const axios = require("axios");
const { KEY_API } = process.env;

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    let genresApi = await axios.get(
      `https://api.rawg.io/api/genres?key=${KEY_API}`
    );
    let allGenrs = await genresApi.data.results.map((genr) => {
      return Genr.create({
        name: genr.name,
      });
    });
    Promise.all(allGenrs).then(() => {
      Genr.findAll({ include: Videogame }).then((ress) => {
        res.send(ress);
      });
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:name", (req, res, next) => {
  let { name } = req.params;
  return Genr.findAll({
    where: {
      name: name,
    },
  }).then((ress) => {
    res.send(ress[0].id)
  })
  .catch(error => next(error))
});

router.post("/", (req, res, next) => {
  const { name } = req.body;
  return Genr.create({
    name,
  })
    .then((genr) => {
      res.send(genr);
    })
    .catch((error) => {
      next(error);
    });
});

router.put("/", (req, res, next) => {
  res.send("soy put /genres");
});

router.delete("/", (req, res, next) => {
  res.send("soy delete /genres");
});

router.get("/platforms", (req, res, next) => {
  axios
    .get(
      "https://api.rawg.io/api/platforms?key=0f64f45aa536442cace1694c6759487d"
    )
    .then((ress) => {
      let platforms = ress.data.results.map((platform) => {
        return platform.name;
      });
      platforms.flat();
      res.send(platforms);
    });
});

module.exports = router;
