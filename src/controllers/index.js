import express from "express";
import * as pizzaServices from "../services/PizzaServices.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", pizzaServices.lire());
});

router.post("/", (req, res) => {
  const { nom_pizza, description_pizza, image_pizza, prix_pizza } = req.body;
  console.log("nnn")
  const pizzas = pizzaServices.ecrire(nom_pizza, description_pizza, image_pizza, prix_pizza);
  console.log("aaa")
  res.render("index", pizzas);
});

export default router;


/*
router.post("/", (req, res) => {
  const { firstname, lastname } = req.body;
  res.render("hello", { firstname, lastname });
});*/