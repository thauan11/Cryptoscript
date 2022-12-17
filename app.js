function gerarSenha(){
    var tamanhoSenha = document.getElementById('tamanhoNumero').value

    if (tamanhoSenha < 1 | tamanhoSenha > 16) {
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
    } else {
        document.getElementById('form0').style.height = '215px'

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

// BOTÃO COPIAR SENHA
document.getElementById('senhaGerada').addEventListener('click', copiar);
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
    
    document.getElementById('tamanhoNumero').onfocus
}



