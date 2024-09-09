const pegarInputs = document.querySelectorAll(".inputs");
const pegarbutton = document.querySelector(".enviar")

let removerAviso = function(input) {
    // Remove o aviso do input específico
    const aviso = input.nextElementSibling;
    if (aviso && aviso.classList.contains("aviso-red")) {
        aviso.classList.remove("red-mostrar");
    }
};

let addAviso = function(input) {
    // Adiciona o aviso ao input específico
    const aviso = input.nextElementSibling;
    if (aviso && aviso.classList.contains("aviso-red")) {
        aviso.classList.add("red-mostrar");
    }
};

pegarInputs.forEach(input => {
    input.addEventListener("change", () => {
        if (input.value !== "") {
            input.classList.add("borda-verde");
            input.classList.remove("borda-vermelha");
            removerAviso(input);
        } else {
            input.classList.remove("borda-verde");
            input.classList.add("borda-vermelha");
            addAviso(input);
            pegarbutton.addEventListener("click", () => {
                alert("preencha todos os campos 🙄!!")
            
            })
        }
    });
});

