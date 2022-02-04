// Cálculo de IMC

const nome = "Felipe";
const peso = 50;
const altura = 1.73;
const sexo = "M";

const imc = peso / (altura * altura);

if (imc >= 30) {
  return console.log(`IMC: ${imc}, ${nome}, você está acima do peso`);
} else if (imc < 29.9) {
  return console.log(`IMC: ${imc}, ${nome}, você não está acima do peso`);
}
