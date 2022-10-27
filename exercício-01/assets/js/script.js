
/*por tag: getElementByTagName()
por id: getElementById()
por nome: getElementsByName()
por classe: getElementsByClassName()
por seletor: querySelector()
*/

let nome = window.document.getElementById("nome") /*com # não funciona*/
let email = document.querySelector("#email") /*se fosse uma classe, dentro do parênteses teia (".email"), se não tiver # ou ponto, não funciona.*/
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML ="Nome inválido"
        txtNome.style.color = "red" 
    } else {
        txtNome.innerHTML = "Nome válido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "Email inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "Email válido"
        txtEmail.style.color = "green"
        emailOk = true
    }  
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto") 

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Texto muito grande, digite no máximo 100 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"

    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ("Formulário enviado com sucesso!")
    } else {
        alert("Preencha o formulário corretamente...")
    }
}

function mapaZoom() {
    mapa.style.width = "600px"
    mapa.style.heigth = "600px"
}

function mapaNormal() {
    mapa.style.width = "250px"
    mapa.style.heigth = "250px"
}