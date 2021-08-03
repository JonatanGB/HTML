







function area(raio){
    return Math.PI * raio ** 2
}

function circunferencia(raio){
    return raio * 2 * Math.PI
} 

module.exports = {
    area,
    circunferencia
}