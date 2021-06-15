// Crea un array di 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine

// ex

var zucchina = [
    {
        varietà: "1",
        peso: randomGen(200, 2000),
        lunghezza: randomGen(20, 100)
    },

    {
        varietà: "2",
        peso: randomGen(200, 2000),
        lunghezza: randomGen(20, 100)
    },

    {
        varietà: "3",
        peso: randomGen(200, 2000),
        lunghezza: randomGen(20, 100)
    },

    {
        varietà: "4",
        peso: randomGen(200, 2000),
        lunghezza: randomGen(20, 100)
    },

    {
        varietà: "5",
        peso: randomGen(200, 2000),
        lunghezza: randomGen(20, 100)
    },

    {
        varietà: "6",
        peso: randomGen(200, 2000),
        lunghezza: randomGen(20, 100)
    },

    {
        varietà: "7",
        peso: randomGen(200, 2000),
        lunghezza: randomGen(20, 100)
    },

    {
        varietà: "8",
        peso: randomGen(200, 2000),
        lunghezza: randomGen(20, 100)
    },

    {
        varietà: "9",
        peso: randomGen(200, 2000),
        lunghezza: randomGen(20, 100)
    },

    {
        varietà: "10",
        peso: randomGen(200, 2000),
        lunghezza: randomGen(20, 100)
    }
]

var pesoTot = 0;

for (var i = 0; i < zucchina.length; i++){
    pesoTot += zucchina[i].peso;
}

console.log(pesoTot);

if (pesoTot > 1000) {
    document.getElementById("demo").innerHTML = "Il peso totale delle zucchine è di " + (pesoTot / 1000) + "kg";   
} else {
    document.getElementById("demo").innerHTML = "Il peso totale delle zucchine è di " + pesoTot + "kg";  
}

// function

function randomGen(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}