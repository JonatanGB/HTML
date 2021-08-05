    /*
    1)
        let links = document.querySelectorAll("ul a")

        for(let i = 0; i < links.length; i++){
            let link = links[i]
            let ref = link.getAttribute("href")
            if(ref.startsWith("http://internal.com")) continue
            if(ref.includes("://")) link.style.color = 'orange'
        }



    eventos 1)
        let texto = document.querySelector("#text")
        let mostrando = true
        let botao = document.querySelector("#esconder")

        function oculta(){
            switch(mostrando){
                case true: 
                    texto.hidden = true
                    mostrando = false
                    break;
                case false:
                    texto.hidden = false
                    mostrando = true
                    break;
            }
        }
        botao.addEventListener("click", oculta)


    eventos 2):
        transition: all .3s;
        top: 0px;
        left: 0px;

        let bola = document.querySelector(".bola")
        let campo = document.querySelector(".campo")
        campo.addEventListener("click", (event) => {
            
            let mouseX = event.clientX
            let mouseY = event.clientY
            if(mouseX + 20 > 627){
                mouseX = 610
            }
            if(mouseX - 20 < 10){
                mouseX = 30
            }
            if(mouseY + 20 > 326){
                mouseY = 310
            }
            if(mouseY - 20 < 10){
                mouseY = 30
            }
            desloca(mouseX, mouseY)
        })

        function desloca(mouX, mouY){
            bola.style.left = (mouX - 40) + "px"
            bola.style.top = (mouY - 40) + "px"
        }


    mouse events:
            let selecionada
            let selecionadas = []
            let ul = document.querySelector("ul")
                ul.addEventListener("click", (event) => {
                let target = event.target
                if(target.tagName != "LI") return;
                if(event.ctrlKey) multi(target)
                else marcar(target)
            })

            function marcar (li){
                let lista = document.body.querySelectorAll("li")
                for(let i = 0; i < 6; i++){
                    let item = lista[i]
                    if(item){
                        remover(item)
                    }
                }
                selecionada = li
                selecionada.classList.add("marcar")
            }
            function remover(li){
                selecionada = li
                if(selecionada){
                    selecionada.classList.remove("marcar")
                }
            }

            function multi(li) {
                selecionada = li
                selecionadas.push(selecionada)
                selecionada.classList.add("marcar")
            }

    
    scroll: 
        let tops = document.body.querySelector(".top")
        top.addEventListener("scroll", (event) =>{
            if(window.pageYOffset <= document.documentElement.clientHeight) tops.classList.add("esconde")
            else tops.classList.remove("esconde")
        })


    */


   /*const fs = require("fs");
   const fsPromises = require("fs/promises");
   const path = require("path");
   const { EOL } = require("os");


   (async () => {
       try {
           const file = await fsPromises.readFile(path.resolve(__dirname, "exercicioNomes.txt"));
           
           let nomes = file.toString("utf-8").split(EOL)
           
           console.log(nomes.filter(nome => nome[0] == "A"))

       } catch (err) {
           console.log(err.message);
       }
   })();*/




   /*
3) Faça um script que leia o arquivo exercioNomes.txt e utilize a biblioteca chalk (https://www.npmjs.com/package/chalk) para
mostrar os nomes que começam com a letra A em vermelho, os nomes que começam com a letra C em azul e os
nomes que começam com a letra D em magenta.
*/


(async () => {
    try {
        const data = await fsPromises.readFile(path.resolve(__dirname, "exercioNomes.txt"));

        console.log(data.toString("utf-8"))
    } catch (err) {
        console.log(err.message);
    }
})();