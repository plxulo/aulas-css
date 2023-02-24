function checkButton() {
    const form = document.getElementById("formulario");
    const button = document.getElementById("enviar");
    form.classList.add("aparecer");
    button.classList.add("aparecer");   
    setTimeout(() => {
        form.classList.add("ativo");
        button.classList.add("ativo")
    }, 100);
};