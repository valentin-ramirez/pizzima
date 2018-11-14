import fs from "fs";

export function lire()
{
    const pizzas = fs.readFileSync('src/storage/Pizzas.json');

    return JSON.parse(pizzas);
}

export function ecrire(nom, description, image, prix)
{
    const pizzas = lire();

    const data = { nom: nom, description: description, image: image, prix: prix };

    pizzas.pizzas.push(data);
    
    // fs.writeFileSync('src/storage/Pizzas.json', JSON.stringify(pizzas), 'utf8');

    fs.exists('src/storage/Pizzas.json', function (exists) {
        if (exists) {
        console.log(pizzas)
          fs.writeFileSync('src/storage/Pizzas.json', JSON.stringify(pizzas), 'utf-8', function (err) {
            if (err)
            {
              console.log("failed to save");
            } else
            {
              console.log("succeeded in saving");
            }
        })
    } else
        {
          console.log('file does not exists');
        }
      })

    
    return pizzas
}