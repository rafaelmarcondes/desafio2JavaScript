let name = prompt("Digite seu nome");

let nota1 = prompt("Digite sua primeira nota");
let nota2 = prompt("Digite sua segunda nota");

alert(`Olá ` + name + ` sua primera nota é ` + nota1 + ` e sua segunda nota é ` + nota2);


alert("A média para APROVAÇÃO DEVE SER MAIOR QUE 70");

media = Number(nota1) + Number(nota2) / 2;

if(media < 70){
  alert(`Vc está REPROVADO, pois sua Média foi de ` + media + ` e deveria ser > que 70`)
}else(
  alert(`Vc está APROVADO, pois sua média foi de ` + media)
)