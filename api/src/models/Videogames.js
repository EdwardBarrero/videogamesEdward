const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Videogame",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      slug:{
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      rating: {
        type: DataTypes.DECIMAL,
      },
      platforms: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      background_image: {
        type: DataTypes.STRING,
        defaultValue: "https://i.blogs.es/819ec1/mando-xbox-en-pc/450_1000.jpg"
      },
      released:{
        type: DataTypes.STRING
      }
    },
    {
      timestamps: false,
    }
  );
};
