// Crea un array di 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine

// ex

var zucchina = [
    {
        varietà: "1",
        peso: randomGen(200, 2000),
        lunghezza: randomGen(0, 20)
    },

    {
        varietà: "2",
        peso: randomGen(200, 2000),
        lunghezza: randomGen(0, 20)
    },

    {
        varietà: "3",
        peso: randomGen(200, 2000),
        lunghezza: randomGen(0, 20)
    },

    {
        varietà: "4",
        peso: randomGen(200, 2000),
        lunghezza: randomGen(0, 20)
    },

    {
        varietà: "5",
        peso: randomGen(200, 2000),
        lunghezza: randomGen(0, 20)
    },

    {
        varietà: "6",
        peso: randomGen(200, 2000),
        lunghezza: randomGen(0, 20)
    },

    {
        varietà: "7",
        peso: randomGen(200, 2000),
        lunghezza: randomGen(0, 20)
    },

    {
        varietà: "8",
        peso: randomGen(200, 2000),
        lunghezza: randomGen(0, 20)
    },

    {
        varietà: "9",
        peso: randomGen(200, 2000),
        lunghezza: randomGen(0, 20)
    },

    {
        varietà: "10",
        peso: randomGen(200, 2000),
        lunghezza: randomGen(0, 20)
    }
]

var zucchineMin = [];

var zucchineMax = [];

for (var i = 0; i < zucchina.length; i++){
    if (zucchina[i].lunghezza < 15) {
        zucchineMin.push(zucchina[i].peso);
    } else {
        zucchineMax.push(zucchina[i].peso);
    }
}

var pesoTotMin = 0;
var pesoTotMax = 0;

for (var i = 0; i < zucchineMin.length; i++){
    pesoTotMin += zucchineMin[i];
}

for (var i = 0; i < zucchineMax.length; i++){
    pesoTotMax += zucchineMax[i];
}

console.log(pesoTotMin);
console.log(pesoTotMax);

if ((pesoTotMin > 1000) || (pesoTotMax > 1000)) {
    document.getElementById("demo").innerHTML = "Il peso delle zucchine che misurano meno di 15 cm sono " + (pesoTotMin / 1000) + "kg mentre quelle che superano i 15cm hanno un peso di " + (pesoTotMax / 1000) + "kg.";
} else {
    document.getElementById("demo").innerHTML = "Il peso delle zucchine che misurano meno di 15 cm sono " + pesoTotMin + "g mentre quelle che superano i 15cm hanno un peso di " + pesoTotMax + "g.";
}


// function

function randomGen(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}