const empresa = {
  nome: "Rocketseat",
  cor: "Roxo",
  foco: "Programação",
  endereco: {
    rua: "Rua Guilherme Gembala",
    numero: 260,
  },
};

console.log(
  `A empresa ${empresa.nome}, está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`
);

const devs = [
  {
    nome: "Felipe",
    idade: 25,
    tecnologias: [
      {
        nome: "JavaScript",
        especialidade: "Web/Mobile",
      },
    ],
  },
  {
    nome: "Carlos",
    idade: 32,
    tecnologias: [
      {
        nome: "C++",
        especialidade: "Desktop",
      },
    ],
  },
];

console.log(
  `O usuário ${devs[1].nome}, tem ${devs[1].idade} e usa a tecnologia ${devs[1].tecnologias[0].nome} com especialidade em ${devs[1].tecnologias[0].especialidade}`
);
