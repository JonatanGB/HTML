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




*/