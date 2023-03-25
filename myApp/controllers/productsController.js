let db = require("../database/models");

const productsController = {
  index: (req, res) => {
    db.Product.findAll().then(function (products) {
      res.render("mainproductspage", { products: products });
    });
  },
  create: (req, res) => {
    db.Product.findAll().then(function (products) {
      return res.render("createproductpage", { products: products });
    });
  },
  createAction: (req, res) => {
    db.Product.create({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      image: req.body.image,
      quantity: req.body.quantity,
    });
    res.send("Created!");
  },
  detail: (req, res) => {
    db.Product.findByPk(req.params.id).then(function (product) {
      res.render("productdetailpage", { product: product });
    });
  },
  edit: (req, res) => {
    db.Product.findByPk(req.params.id).then(function(product){
      res.render("editproductpage", {product})
    })
  },
  editAction: (req, res) => {
    db.Product.update({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      image: req.body.image,
      quantity: req.body.quantity,
    },{
      where: {
        id_product: req.params.id
      }
    })

    res.redirect("/products/" + req.params.id + "/detail")
  },
  deleteAction: (req, res) => {
    db.Product.destroy({
      where: {
        id_product: req.params.id
      }
    })

    res.redirect("/products")
  }
};

module.exports = productsController;
