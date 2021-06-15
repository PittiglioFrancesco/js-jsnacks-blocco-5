// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.


// ex

var bici = [
    {
        nome: "biciA",
        peso: 12
    },

    {
        nome: "biciB",
        peso: 15
    },

    {
        nome: "biciC",
        peso: 10
    }
];

var magg = 0;

for (var i = 1; i < bici.length; i++){
    if (bici[i].peso < bici[i-1].peso) {
        magg = bici[i].peso;
    } else {
        magg = bici[i-1].peso;
    }
}

for (var i = 0; i < bici.length; i++){
    if (magg == bici[i].peso) {
        console.log(bici[i].nome + " " + bici[i].peso);
    }
}