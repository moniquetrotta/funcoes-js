function calculaIdade(anos){
return `Daqui a ${anos} anos, ${this.nome} terá ${
  this.idade + anos
} anos de idade.`;
}

const pessoa1 =  {
  nome: 'Maria',
  idade: 30
}
const pessoa2 =  {
  nome: 'Paulo',
  idade: 25
}
const animal1 =  {
  nome: 'Fiona',
  idade: 3,
  raca: 'Pug'
}

console.log(calculaIdade.call(pessoa2, 30));