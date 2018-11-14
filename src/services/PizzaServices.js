import fs from "fs";

export function ecrire(nom, description, image, prix)
{
    const pizzas = lire();

    const data = { nom: nom, description: description, image: image, prix: prix };

    pizzas.pizzas.push(data);

    fs.writeFileSync('src/storage/Pizzas.json', JSON.stringify(pizzas));

    return pizzas
}

export function lire()
{
    const pizzas = fs.readFileSync('src/storage/Pizzas.json');

    return JSON.parse(pizzas);
}