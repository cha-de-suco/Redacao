const tituloInput = document.getElementById("tituloInput");
const redacaoInput = document.getElementById("redacaoInput");
const validarBt = document.getElementById("validarBt")
const depurarBt = document.getElementById("depurarBt")

validarBt.addEventListener("click", () => {
    let titulo= tituloInput.value;
    let redacao = redacaoInput.value;

    const data = {
        titulo: titulo,
        redacao: redacao
    }
    
    

    localStorage.setItem("Redação", JSON.stringify(data))
})

