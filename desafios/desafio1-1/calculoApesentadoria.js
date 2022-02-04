// Calculadora de aposentadoria

// Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos outros fatores para serem levados em conta :)

const nome = "Silvana";
const sexo = "M";
const idade = 60;
const contribuicao = 35;

const regra = idade + contribuicao;

const homemPodeAposentar = sexo == "M" && regra > 95;

if (regra >= 85) {
  if (sexo == "F" && regra >= 85) {
    return console.log(`${nome}, você pode se aposentar`);
  }
  if (sexo == "M" && regra >= 95) {
    return console.log(`${nome}, você pode se aposentar`);
  } else {
    return console.log(`${nome}, você não pode se aposentar`);
  }
} else {
  return console.log(`${nome}, você não pode se aposentar`);
}
