const form = document.getElementById('form');
const nomeBeneficiario = document.getElementById('nome-beneficiario');

let formValido = false;

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

function LimparFormulario() { //Função para limpar formulario
    if (formValido) {
        const mensagemSucesso = document.getElementById('mensagem-Sucesso');

        document.getElementById('ok-button').addEventListener('click', function() {
            mensagemSucesso.style.display = 'none';
            form.reset();
        });
    } else {
        alert('Depósito não confirmado!');
    }
}

//Evento de submit do formulário
form.addEventListener('submit', function(event) {
   
    event.preventDefault();

    //Captura os valores dos inputs
    const numeroConta = document.getElementById('numero-conta').value;
    const valor = document.getElementById('valor').value;
    const descricao = document.getElementById('descricao').value;

    //Mensagem de sucesso
    
    const mensagemSucesso = `Depósito concluído!<br><br>
    Valor: <b>${valor}</b> reais<br>
    Nome do beneficiário: <b>${nomeBeneficiario.value}</b><br>
    Número da conta: <b>${numeroConta}</b><br>
    Descrição: <b>${descricao.length === 0 ? 'Nenhuma descrição adicionada.' : descricao}</b><br><br>
    <button id="ok-button">Ok</button>`;

    formValido = validaNome(nomeBeneficiario.value);
    //Valida o nome
    if (formValido) {

        // Exibe a mensagem de sucesso
        const containerMensagemSucesso = document.getElementById('mensagem-Sucesso');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        //Reseta o formulário
        form.reset();

        LimparFormulario();
        
    } else {
        //Valida o nome
        nomeBeneficiario.style.border = '1px solid red';
        document.getElementById('nome-beneficiario-error').style.display = 'block';
        return; // Interrompe a execução se o nome for inválido
    }   

    //Valida a descrição
    if (descricao.length > 100) {
        alert('Descrição deve ter no máximo 100 caracteres.');
        return; // Interrompe a execução se a descrição for inválida
    }

});

nomeBeneficiario.addEventListener('change', function(e) {
    formValido = validaNome(e.target.value);
    if (!formValido) {
        nomeBeneficiario.classList.add('input-error');
        document.getElementById('nome-beneficiario-error').style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove('input-error');
        nomeBeneficiario.classList.add('input-success');
        document.getElementById('nome-beneficiario-error').style.display = 'none';
    }
});