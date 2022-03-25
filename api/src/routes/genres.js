const { Router } = require("express");
const { Genr } = require("../db");

const router = Router();

router.get("/", (req, res, next) => {
  return Genr.findAll()
    .then((genr) => {
      res.send(genr);
    })
    .catch((error) => {
      next(error);
    });
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

module.exports = router;
