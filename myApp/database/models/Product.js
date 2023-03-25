const { config } = require("../../.sequelizerc");

module.exports = function (sequelize, dataTypes) {
  let alias = "Product";

  let cols = {
    id_product: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity: {
      type: dataTypes.INTEGER,
      allowNull: true,
    },
    name: {
      type: dataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: dataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: dataTypes.STRING,
      allowNull: true,
    },
    category: {
      type: dataTypes.STRING,
      allowNull: true,
    },
    color: {
      type: dataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: dataTypes.INTEGER,
      allowNull: true,
    },
    id_user: {
      type: dataTypes.INTEGER,
      foreignKey: true
    }
  };

  let config = {
    tableName: "products",
    timestamps: true,
    underscore: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  let Product = sequelize.define(alias, cols, config);

  Product.associate = (models) => {
    Product.belongsTo(models.User, {
      as: "user",
      foreignKey: "id_product",
    });

    Product.belongsToMany(models.Order, {
      as: "orders",
      foreignKey: "id_product",
      otherKey: "id_order",
      through: "orders_products",
    });
  };

  return Product;
};
