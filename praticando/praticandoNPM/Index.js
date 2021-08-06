

const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");
const os = require("os");






(async () => {

    const alunos = await (await fsPromises.readFile(path.resolve(__dirname, "alunos.json"))).toString()
    let students = await JSON.parse(alunos)
    let aprovados = students.filter(aluno => ((aluno.notas[0] + aluno.notas[1] + aluno.notas[2]) / 3) >= 6)
    for (let i = 0; i < aprovados.length; i++) {
        aprovados[i].media = Math.round((aprovados[i].notas[0] + aprovados[i].notas[1] + aprovados[i].notas[2]) / 3)
    }
    fsPromises.writeFile(path.resolve(__dirname, "aprovados.json"), JSON.stringify(aprovados))
})();

