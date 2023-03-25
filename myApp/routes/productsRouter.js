const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");

router.get("/", productsController.index);

router.get("/create", productsController.create);
router.post("/create", productsController.createAction);

router.get("/:id/detail", productsController.detail)

router.get("/:id/edit", productsController.edit);
router.post("/:id/edit", productsController.editAction);

router.post("/:id/delete", productsController.deleteAction);

module.exports = router;
