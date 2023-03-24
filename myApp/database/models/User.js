module.exports = function (sequelize, dataTypes) {
  let alias = "User";

  let cols = {
    id_user: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: dataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: dataTypes.STRING,
        allowNull: false
    },
    email: {
        type: dataTypes.STRING,
        allowNull: false
    },
    password: {
        type: dataTypes.STRING,
        allowNull: false
    },
    image: {
        type: dataTypes.STRING,
        allowNull: false
    },

  }

  let config = {
    tableName: "users",
    timestamps: true,
    underscore: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  let User = sequelize.define(alias, cols, config);

  User.associate = function(models) {
    User.hasMany(models.Order, {
        as: 'orders',
        foreignKey: "id_user",
    })

    User.hasMany(models.Product, {
        as: "products",
        foreignKey: "id_user",
        
    })
  }

  return User;
};
