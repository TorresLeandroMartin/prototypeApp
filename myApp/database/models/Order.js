module.exports = function (sequelize, dataTypes) {
  let alias = "Order";

  let cols  = {
    id_order: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_product: {
      type: dataTypes.INTEGER,
      foreignKey: true,
    },
    id_user: {
      type: dataTypes.INTEGER,
      foreignKey: true,
    },
    email: {
      type: dataTypes.STRING,
      foreignKey: true,
    },
    total: {
      type: dataTypes.STRING,
      allowNull: false,
    },
  };

  let config = {
    tableName: "products",
    timestamps: true,
    underscore: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  let Order = sequelize.define(alias, cols, config);

  Order.asociate = (models) => {
    Order.belongsTo(models.User, {
        as: "user",
        foreignKey: "id_order"
    })

    Order.belongsToMany(models.Product, {
        as: "products",
        foreignKey: "id_order",
        otherKey: "id_product",
        through: "orders_products"
    })
  }

  return Order;
};
