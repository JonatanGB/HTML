









const {area, circunferencia} = require("./circulo")
const Quadrado = require("./quadrado")

console.log(area(5))
console.log(circunferencia(5))


let quatro = new Quadrado(5)
console.log(Quadrado)
console.log(quatro.area())
//  (npm init -y): cria um package.json;  adicionar: ("type": "module",)