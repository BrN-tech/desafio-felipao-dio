let XpHeroi = "abc";          // Altera o valor do xp do Herói, necessário alterar o valor de 100, para algum valor desejado.
let nivel;                  // Armazena o nível do personagem (Ferro, Bronze etc.)
let nome = "SuperSwitch";   // Nome do SuperHerói

switch(true){
    case XpHeroi <= 1000:
        nivel = "Ferro"
        console.log("O herói de nome " + nome + " está no nível de " + nivel)
        break
    case XpHeroi <= 2000:
        nivel = "Bronze"
        console.log("O herói de nome " + nome + " está no nível de " + nivel)
        break
    case XpHeroi <= 5000:
        nivel = "Prata"
        console.log("O herói de nome " + nome + " está no nível de " + nivel)
        break
    case XpHeroi <= 7000:
        nivel = "Ouro"
        console.log("O herói de nome " + nome + " está no nível de " + nivel)
        break
    case XpHeroi <= 8000:
        nivel = "Platina"
        console.log("O herói de nome " + nome + " está no nível de " + nivel)
        break
    case XpHeroi <= 9000:
        nivel = "Ascendente"
        console.log("O herói de nome " + nome + " está no nível de " + nivel)
        break
    case XpHeroi <= 10000:
        nivel = "Imortal"
        console.log("O herói de nome " + nome + " está no nível de " + nivel)
        break
    case XpHeroi >= 10001:
        nivel = "Radiante"
        console.log("O herói de nome " + nome + " está no nível de " + nivel)
        break
    default:
        console.log("Ops, acho que o SuperSwitch está com algum problema :/");
}