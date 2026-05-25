const prompt = require ('promp-sync')()
let tentativas = 0;
while (true) {

    let senha = prompt("Digite a senha:"); tentativas++;
    if (senha === "1234") { console.log("Acesso liberado!"); break; }
    if (tentativas >= 3)  { console.log("Conta bloqueada!");  break; }
    console.log("Senha errada. Tente novamente.");
}