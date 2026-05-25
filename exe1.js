const prompt = require ('prompt-sync')()
// Numero secreto a ser adivinhado
let secreto = 7;

// Declaracao — palpite inicial diferente do secreto
let palpite = 0;

// Condicao — repete enquanto nao adivinhar
while (palpite !== secreto) {

    palpite = Number(prompt("Digite um numero:"));

    if (palpite < secreto) {
        console.log("Muito baixo! Tente maior.");
    } else if (palpite > secreto) {
        console.log("Muito alto! Tente menor.");
    }
}
console.log("Parabens! Voce acertou!");
