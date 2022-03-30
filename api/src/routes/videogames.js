const { Router } = require("express");
const axios = require("axios");
const { Videogame, Genr } = require("../db.js");
const { KEY_API } = process.env;
const router = Router();
const { Op } = require("sequelize");

const filterDataDbFunction = (videogamesDb, page) => {
  let filterDataDb = [];
  if (page == 1) {
    filterDataDb = videogamesDb.map((videogame) => {
      let rating = parseInt(videogame.dataValues.rating);
      let platforms = videogame.dataValues.platforms.split(",");
      let genres = videogame.dataValues.Genrs.map((genr) => {
        return genr.dataValues.name;
      });
      return {
        id: videogame.dataValues.id,
        name: videogame.dataValues.name,
        rating,
        genres,
        platforms,
        background_image: videogame.dataValues.background_image,
      };
    });
  }
  return filterDataDb;
};

const filterDataApiFunction = (videogamesApi) => {
  let filterDataApi = videogamesApi.data.results.map((videogame) => {
    let genres = videogame.genres.map((genr) => genr.name);
    let platforms = videogame.parent_platforms.map(
      (platform) => platform.platform.name
    );
    return {
      id: videogame.id,
      name: videogame.name,
      rating: videogame.rating,
      genres,
      platforms,
      background_image: videogame.background_image,
    };
  });
  return filterDataApi;
};

router.get("/", (req, res, next) => {
  let { page } = req.query;
  const { genr } = req.query;
  const { order } = req.query;
  const { filterGames } = req.query;
  if (!page) {
    page = 1;
  }
  let videogamesApi = axios.get(
    `https://api.rawg.io/api/games?key=${KEY_API}&page=${page}`
  );
  let videogamesDb;
  if (page == 1) {
    videogamesDb = Videogame.findAll({
      include: Genr,
    });
  }

  Promise.all([videogamesApi, videogamesDb])
    .then((ress) => {
      const [videogamesApi, videogamesDb] = ress;
      let filterDataApi = filterDataApiFunction(videogamesApi);
      let filterDataDb = filterDataDbFunction(videogamesDb, page);
      let allVideogames = [];
      if (filterGames === "juegosCreados") {
        allVideogames = [...filterDataDb];
      } else if (filterGames === "juegosExistentes") {
        allVideogames = [...filterDataApi];
      } else {
        allVideogames = [...filterDataDb, ...filterDataApi];
      }

      if (genr) {
        let gamesFilterByGenr = allVideogames.filter((game) => {
          return game.genres.includes(genr);
        });
        allVideogames = gamesFilterByGenr;
      }

      if (order) {
        switch (order) {
          case "A-Z":
            allVideogames.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
              if (b.name.toLowerCase() > a.name.toLowerCase()) return -1;
              return 0;
            });
            break;
          case "Z-A":
            allVideogames.sort((b, a) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
              if (b.name.toLowerCase() > a.name.toLowerCase()) return -1;
              return 0;
            });
            break;
          case "Rating-Asc":
            allVideogames.sort((a, b) => {
              if (a.rating > b.rating) return 1;
              if (b.rating > a.rating) return -1;
              return 0;
            });
            break;
          case "Rating-Desc":
            allVideogames.sort((b, a) => {
              if (a.rating > b.rating) return 1;
              if (b.rating > a.rating) return -1;
              return 0;
            });
            break;
          default:
            allVideogames;
        }
      }
      res.send(allVideogames);
    })
    .catch((error) => next(error));
});

router.get("/detail/:videogameid", async (req, res, next) => {
  const { videogameid } = req.params;
  try {
    if (isNaN(videogameid)) {
      let videogame = await Videogame.findByPk(videogameid, {
        include: Genr,
      }).then((ress) => {
        let platforms = ress.platforms.split(",");
        let genres = ress.Genrs.map((genr) => {
          return genr.name;
        });
        return {
          id: ress.id,
          name: ress.name,
          description: ress.description,
          rating: parseInt(ress.rating),
          platforms,
          genres,
          background_image: ress.background_image,
          released: ress.released,
        };
      });
      res.send(videogame);
    } else {
      let videogame = await axios(
        `https://api.rawg.io/api/games/${videogameid}?key=${KEY_API}`
      ).then((ress) => {
        console.log(ress.data);
        let platforms = ress.data.platforms.map((platform) => {
          return platform.platform.name;
        });
        let genres = ress.data.genres.map((genr) => {
          return genr.name;
        });

        return {
          id: ress.data.id,
          name: ress.data.name,
          description: ress.data.description_raw,
          rating: ress.data.rating,
          platforms,
          genres,
          background_image: ress.data.background_image,
          released: ress.data.released,
        };
      });
      res.send(videogame);
    }
  } catch (error) {
    next(error);
  }
});

router.get("/game/:title", async (req, res, next) => {
  try {
    let { title } = req.params;
    let { page } = req.query;

    if (!page) {
      page = 1;
    }

    title = title.toLocaleLowerCase();
    let videogameApi = await axios.get(
      `https://api.rawg.io/api/games?search=${title}&key=${KEY_API}&page=${page}`
    );
    let videogameDb = await Videogame.findAll({
      include: Genr,
      where: {
        slug: {
          [Op.substring]: title,
        },
      },
    });

    let filterDataApi = filterDataApiFunction(videogameApi);
    let filterDataDb = filterDataDbFunction(videogameDb, page);
    let allGamesResult = [...filterDataDb, ...filterDataApi];
    res.send(allGamesResult);
  } catch (error) {
    next(error);
  }
});

router.post("/", (req, res, next) => {
  const { name, description, rating, platforms, released } = req.body;
  let slug = name.toLowerCase();
  return Videogame.create({
    name,
    slug,
    description,
    rating,
    platforms,
    released,
  })
    .then((videogame) => res.send(videogame.id))
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
