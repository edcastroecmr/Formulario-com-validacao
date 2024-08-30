const pegarInputs = document.querySelectorAll(".inputs")
const pegarForm = document.querySelector(".form")


let removerAviso = (function(){
    const pegarAvisos = document.querySelectorAll(".aviso-red")
     pegarAvisos.forEach(avisos =>{
        avisos.classList.remove("red-mostrar")

     })
})
let addAviso = (function(){
    const pegarAvisos = document.querySelectorAll(".aviso-red")
    pegarAvisos.forEach(avisos =>{
        avisos.classList.add("red-mostrar")
    })
    
})


pegarInputs.forEach(input =>{
    input.addEventListener("change" , () =>{
        if(input.value !== ""){
        input.classList.add("borda-verde")
        input.classList.remove("borda-vermelha")
        removerAviso()
     }else{
        input.classList.remove("borda-verde")
        input.classList.add("borda-vermelha")
         addAviso()
     }

    })
})











