var pagina = window.location.pathname
console.log(pagina)

function gerarSenha(){
    var tamanhoSenha = document.getElementById('tamanhoNumero').value

    if (tamanhoSenha < 1 | tamanhoSenha > 16) {
        if (pagina.includes('index.html')) {
            alertaTamanho()
        } else {
            alertaTamanhoPopUp()
        }
    } else {
        //MOSTRA A DIV DA SENHA
        mostrarSenha()

        //CHECKBOX'S
        let checkBoxNum = document.getElementById('cbxNumero')
        let checkBoxCaractere = document.getElementById('cbxCaractere')
    
        if (checkBoxNum.checked & checkBoxCaractere.checked) { //TODAS AS OPÇÕES MARCADAS
            if (tamanhoSenha % 2 === 0) {
                var tamanhoLetra = (tamanhoSenha/2)-1
                var tamanhoNumero = tamanhoSenha/2 
            } else {
                tamanhoSenha = tamanhoSenha-1
                var tamanhoLetra = (tamanhoSenha/2)
                var tamanhoNumero = tamanhoSenha/2 
            }
        
            // SELECIONA CARACTERE ESPECIAL ALEATORIOS
            var especialAleatorio = '';
            var especial = '!@#$%&'
            for (var i = 0; i < 1; i++) {
                especialAleatorio += especial.charAt(Math.floor(Math.random() * especial.length));
            }
        
            // SELECIONA NUMEROS ALEATORIOS
            var numeroAleatorio = '';
            var numeros = '0123456789';
            for (var i = 0; i < tamanhoNumero; i++) {
                numeroAleatorio += numeros.charAt(Math.floor(Math.random() * numeros.length));
            }
        
            // SELECIONA LETRAS ALEATORIAS
            var letraAleatoria = '';
            var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            for (var i = 0; i < tamanhoLetra; i++) {
                letraAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
            }
    
            var senhaGerada =  letraAleatoria+numeroAleatorio+especialAleatorio
            return document.getElementById('senhaGerada').value = senhaGerada
        } 
    
        else if (checkBoxNum.checked) { //SOMENTE A OPÇÃO NUMERO MARCADA
            if (tamanhoSenha % 2 === 0) {
                var tamanhoLetra = (tamanhoSenha/2)
                var tamanhoNumero = tamanhoSenha/2 
            } else {
                var tamanhoLetra = (tamanhoSenha/2)-1
                var tamanhoNumero = tamanhoSenha/2 
            }
        
            // SELECIONA NUMEROS ALEATORIOS
            var numeroAleatorio = '';
            var numeros = '0123456789';
            for (var i = 0; i < tamanhoNumero; i++) {
                numeroAleatorio += numeros.charAt(Math.floor(Math.random() * numeros.length));
            }
        
            // SELECIONA LETRAS ALEATORIAS
            var letraAleatoria = '';
            var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            for (var i = 0; i < tamanhoLetra; i++) {
                letraAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
            }
    
            var senhaGerada =  letraAleatoria+numeroAleatorio
            return document.getElementById('senhaGerada').value = senhaGerada
        } 
    
        else if (checkBoxCaractere.checked) { //SOMENTE A OPÇÃO CARACTERE MARCADA
            tamanhoSenha = tamanhoSenha-1
        
            // SELECIONA CARACTERE ESPECIAL ALEATORIOS
            var especialAleatorio = '';
            var especial = '!@#$%&'
            for (var i = 0; i < 1; i++) {
                especialAleatorio += especial.charAt(Math.floor(Math.random() * especial.length));
            }
        
            // SELECIONA LETRAS ALEATORIAS
            var letraAleatoria = '';
            var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            for (var i = 0; i < tamanhoSenha; i++) {
                letraAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
            }
    
            var senhaGerada =  especialAleatorio+letraAleatoria
            return document.getElementById('senhaGerada').value = senhaGerada
        } 
    
        else { //NENHUMA OPÇÃO MARCADA
            // SELECIONA LETRAS ALEATORIAS
            var letraAleatoria = '';
            var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            for (var i = 0; i < tamanhoSenha; i++) {
                letraAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
            }
            return document.getElementById('senhaGerada').value = letraAleatoria
        }
    }
}

// MOSTRA A SENHA
function mostrarSenha() {
    document.getElementById('form0').style.height = '215px'
}

function alertaTamanho(){
    Swal.fire({
        title: 'Digite um valor entre 1 e 16',
        icon: 'error',
        iconColor: 'white',
        color: 'white',
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false,
        heightAuto: false,
    })
}

// BOTÃO COPIAR SENHA
function copiar() {
    document.querySelector("#senhaGerada").select();
    document.execCommand("copy");

    Swal.fire({
        title: 'Senha copiada',
        icon: 'success',
        iconColor: 'white',
        color: 'white',
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false,
        heightAuto: false,
    })
}

//FUNÇÕES PARA O HTML POPUP
function abrirPopUp() {
    janela = window.open('popup.html','nova_janela','width=300,height=260')
}

function copiarPopUp() {
    document.querySelector("#senhaGerada").select();
    document.execCommand("copy");

    Swal.fire({
        title: 'Senha copiada',
        icon: 'success',
        iconColor: 'white',
        color: 'white',
        timer: 1000,
        timerProgressBar: true,
        showConfirmButton: false,
        heightAuto: false,
    })
}

function alertaTamanhoPopUp(){
    Swal.fire({
        title: 'Digite um valor entre 1 e 16',
        icon: 'error',
        iconColor: 'white',
        color: 'white',
        timer: 1000,
        timerProgressBar: true,
        showConfirmButton: false,
        heightAuto: false,
        width: 300,
        heightAuto: true,
        padding: 0,
    })
}

