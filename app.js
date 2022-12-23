let pagina = window.location.pathname
let layoutAtual = 'black'

// GERA A SENHA
function gerarSenha() {
    let tamanhoSenha = document.getElementById('tamanhoNumero').value

    if (tamanhoSenha < 1 | tamanhoSenha > 16) {
        if (pagina.includes('popup.html')) {
            alertaTamanhoPopUp()
            return null
        } else {
            alertaTamanho()
            return null
        }
    } else {
        let checkBoxNum = document.getElementById('cbxNumero')
        let checkBoxCaractere = document.getElementById('cbxCaractere')
        mostrarSenha()
        if (checkBoxNum.checked & checkBoxCaractere.checked) {// SE CARACTERE ESPECIAL E NUMEROS ESTIVER MARCADO
            if (impoPar(tamanhoSenha) == 'par') {
                let x = tamanhoSenha/2
                return document.getElementById('senhaGerada').value = letraAleatoria(x-1)+numAleatorio(x)+caractereEspecial(1)
            }
            else {
                let x = (tamanhoSenha/2)-1
                return document.getElementById('senhaGerada').value = letraAleatoria(x)+numAleatorio(x)+caractereEspecial(1)
            }
        }
        else if (checkBoxNum.checked) {// SE NUMEROS ESTIVER MARCADO
            if (impoPar(tamanhoSenha) == 'par') {
                let x = tamanhoSenha/2
                return document.getElementById('senhaGerada').value = letraAleatoria(x)+numAleatorio(x)
            }
            else {
                let x = (tamanhoSenha/2)
                return document.getElementById('senhaGerada').value = letraAleatoria(x-1)+numAleatorio(x)
            }
        }
        else if (checkBoxCaractere.checked) {// SE CARACTERE ESPECIAL MARCADO
            if (impoPar(tamanhoSenha) == 'par') {
                let x = tamanhoSenha/2
                return document.getElementById('senhaGerada').value = letraAleatoria(x)+caractereEspecial(x)
            }
            else {
                let x = (tamanhoSenha/2)
                return document.getElementById('senhaGerada').value = letraAleatoria(x-1)+caractereEspecial(x)
            }
        }
        else { // SE NENHUM CHECKBOX ESTIVER MARCADO
            return document.getElementById('senhaGerada').value = letraAleatoria(tamanhoSenha)
        }
    }
}

// VERIFICA SE O NUMERO É PAR OU IMPAR //
function impoPar(tamanhoSenha) {
    if (tamanhoSenha % 2 === 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

// SELECIONA X CARACTERES ESPECIAIS //
function caractereEspecial(qtd) {
    let caractere = ''
    let especial = '!@#$%&'
    for (let i = 0; i < qtd; i++) {
        caractere += especial.charAt(Math.floor(Math.random() * especial.length));
    }
    return caractere
}

// SELECIONA X NUMEROS //
function numAleatorio(qtd) {
    var numeros = ''
    let num = '0123456789';
    for (let i = 0; i < qtd; i++) {
        numeros += num.charAt(Math.floor(Math.random() * num.length));
    }
    return numeros
}

// SELECIONA X LETRAS //
function letraAleatoria(qtd) {
    var letras = ''
    let caracteres = 'ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'; //não tem I e l
    for (let i = 0; i < qtd; i++) {
        letras += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return letras
}

// AUMENTA O TAMANHO DA DIV E EXIBE A LABEL COM A SENHA //
function mostrarSenha() {
    document.getElementById('form0').style.height = '225px'
}

// ALERTA TAMANHO SENHA MENOR QUE 1 E MAIOR QUE 16 //
function alertaTamanho(){
    Swal.fire({
        title: 'Digite um valor entre 1 e 16',
        icon: 'error',
        iconColor: '#7747F0',
        background: '#121212',
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false,
        heightAuto: false,
    })
}

// BOTÃO COPIAR SENHA //
function copiar() {
    document.querySelector("#senhaGerada").select();
    document.execCommand("copy");

    Swal.fire({
        title: 'Senha copiada',
        icon: 'success',
        iconColor: '#7747F0',
        background: '#121212',
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false,
        heightAuto: false,
    })
}

// FUNÇÕES POP-UP //
function abrirPopUp() {
    janela = window.open('popup.html','nova_janela','width=350,height=270',titlebar=0,resizable=0)
}
function alertaTamanhoPopUp(){
    Swal.fire({
        title: 'Digite um valor entre 1 e 16',
        icon: 'error',
        iconColor: '#7747F0',
        color: 'white',
        background: '#121212',
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false,
        heightAuto: false,
        width: 300,
        heightAuto: true,
        padding: 0,
    })
}

//BOTOES BARRA LATERAL
function aumentarBtnPopUp() {
    document.getElementById('box4_1').style.width = '110px'
    document.getElementById('span_box_4_1').style.width = '65px'
}
function diminuirBtnPopUp() {
    document.getElementById('box4_1').style.width = '40px'
    document.getElementById('span_box_4_1').style.width = '0px'
}
function aumentarBtnColorSwith() {
    document.getElementById('box4_2').style.width = '150px'
    document.getElementById('span_box_4_2').style.width = '100px'
}
function diminuirBtnColorSwith() {
    document.getElementById('box4_2').style.width = '40px'
    document.getElementById('span_box_4_2').style.width = '0'
}

// FUNÇÃO QUE MUDARÁ A COR DE TODO O SITE
function colorSwitch() {
    Swal.fire({
        title: 'Em construção...',
        icon: 'warning',
        iconColor: '#7747F0',
        background: '#121212',
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false,
        heightAuto: false,
    })
}