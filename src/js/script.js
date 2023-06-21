function enviarForm() {
    const telefone = document.getElementById(`telefone`)
    const email = document.getElementById(`email`)
    let form = document.getElementById(`formulario`)
    let span = document.querySelectorAll(`.span`)
    
    let itens = [
        form.children[0], 
        form.children[2], 
        form.children[4], 
        form.children[6]
    ]
    
    let verificarValores = true

    itens.forEach(function(elemento, i) {
        elemento.classList.remove(`borda-vermelha`)
        elemento.classList.add(`borda-verde`)
        span[i].classList.remove(`aviso`)

        if (elemento.value === ``) {
            elemento.classList.remove(`borda-verde`)
            elemento.classList.add(`borda-vermelha`)
            span[i].classList.add(`aviso`)

            verificarValores = false
        }
    })

    if (telefoneValido(telefone.value) === false) {
        let spanTel = document.querySelector(`.span-tel`)

        telefone.classList.remove(`borda-verde`)
        telefone.classList.add(`borda-vermelha`)
        spanTel.classList.add(`aviso`)

        verificarValores = false
    }

    if (emailValido(email.value) === false) {
        let spanEmail = document.querySelector(`.span-email`)

        email.classList.remove(`borda-verde`)
        email.classList.add(`borda-vermelha`)
        spanEmail.classList.add(`aviso`)

        verificarValores = false
    }

    if (verificarValores === true) {
        form.submit();
    }

    function telefoneValido(telefone) {
        let telefoneValid = /^[(1-9)]{2}\s?9?\s?[2-9]\d{3}[- ]?\d{4}$/

        if (telefoneValid.test(telefone)) {
            return true
        }

        return false
    }
    
    function emailValido(email) {
        let emailValid =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/

        if (emailValid.test(email)) {
            return true
        }

        return false
    }
}