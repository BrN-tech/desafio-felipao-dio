let XpHeroi = 100;          // Armazena o xp do Herói, para subir de nivel, é necessário alterar o valor de 100 para algum valor desejado.
let nivel;                  // Armazena o nível do personagem (Ferro, Bronze, Prata etc..)
let nome = "SuperSwitch";   // Armazena o nome do SuperHerói


switch(true){
    case XpHeroi <= 1000:
        nivel = "Ferro";
        console.log("O herói de nome " + nome + " está no nível de " + nivel);
        break;
    case XpHeroi <= 2000:
        nivel = "Bronze";
        console.log("O herói de nome " + nome + " está no nível de " + nivel);
        break;
    case XpHeroi <= 5000:
        nivel = "Prata";
        console.log("O herói de nome " + nome + " está no nível de " + nivel);
        break;
    case XpHeroi <= 7000:
        nivel = "Ouro"
        console.log("O herói de nome " + nome + " está no nível de " + nivel);
        break;
    case XpHeroi <= 8000:
        nivel = "Platina"
        console.log("O herói de nome " + nome + " está no nível de " + nivel);
        break;
    case XpHeroi <= 9000:
        nivel = "Ascendente";
        console.log("O herói de nome " + nome + " está no nível de " + nivel);
        break;
    case XpHeroi <= 10000:
        nivel = "Imortal";
        console.log("O herói de nome " + nome + " está no nível de " + nivel);
        break;
    case XpHeroi >= 10001:
        nivel = "Radiante";
        console.log("O herói de nome " + nome + " está no nível de " + nivel);
        break;
    default:
        console.log("\n Ops.. o SuperSwitch não entendeu, tente novamente digitando um número na variável XpHeroi \n");
}