
let links = document.querySelectorAll("ul a")

for(let i = 0; i < links.length; i++){
    let link = links[i]
    let ref = link.getAttribute("href")
    if(ref.startsWith("http://internal.com")) continue
    if(ref.includes("://")) link.style.color = 'orange'
}