document.addEventListener('DOMContentLoaded', function() {
  // Inicializa o EmailJS somente se o objeto emailjs estiver disponível
  if (typeof emailjs !== "undefined") {
    emailjs.init("fZGdWbpDFqBeVA2sS"); // substitua pelo seu User ID do EmailJS
  } else {
    console.error("EmailJS não foi carregado. Adicione o script do EmailJS no seu HTML.");
  }

  const form = document.getElementById('form');
  const nomeBeneficiario = document.getElementById('nome-beneficiario');
  const emailClienteInput = document.getElementById('email-cliente');

  let formValido = false;

  function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.trim().split(' ');
    return nomeComoArray.length >= 2;
  }

  function LimparFormulario() {
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

  // Evento de submit do formulário
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Captura os valores dos inputs
    const numeroConta = document.getElementById('numero-conta').value;
    const valor = document.getElementById('valor').value;
    const descricao = document.getElementById('descricao').value;
    const emailCliente = emailClienteInput.value;

    // Validação de nome
    formValido = validaNome(nomeBeneficiario.value);

    if (!formValido) {
      nomeBeneficiario.style.border = '1px solid red';
      document.getElementById('nome-beneficiario-error').style.display = 'block';
      return;
    }

    // Validação de email
    if (!emailCliente || !emailCliente.includes("@")) {
      emailClienteInput.style.border = "1px solid red";
      document.getElementById("email-cliente-error").style.display = "block";
      return;
    } else {
      emailClienteInput.style.border = "";
      document.getElementById("email-cliente-error").style.display = "none";
    }

    // Validação da descrição
    if (descricao.length > 100) {
      alert('Descrição deve ter no máximo 100 caracteres.');
      return;
    }

    // Mostra mensagem de sucesso no HTML
    const mensagemSucesso = `Depósito concluído!<br><br>
      Valor: <b>${valor}</b> reais<br>
      Nome do beneficiário: <b>${nomeBeneficiario.value}</b><br>
      Número da conta: <b>${numeroConta}</b><br>
      Descrição: <b>${descricao.length === 0 ? 'Nenhuma descrição adicionada.' : descricao}</b><br><br>
      <button id="ok-button">Ok</button>`;

    const containerMensagemSucesso = document.getElementById('mensagem-Sucesso');
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = 'block';

    LimparFormulario();

    // ==============================
    // ENVIO DO EMAIL COM EMAILJS
    // ==============================
    if (typeof emailjs !== "undefined") {
      const dataHora = new Date().toLocaleString("pt-BR");

      emailjs.send("service_accrjij", "template_uv4oq1n", {
        to_name: nomeBeneficiario.value,
        conta: numeroConta,
        valor: valor,
        descricao: descricao.length === 0 ? "Nenhuma descrição adicionada." : descricao,
        data_hora: dataHora,
        email_cliente: emailCliente // agora vai para o email digitado pelo cliente
      })
      .then(function(response) {
        console.log("Email enviado com sucesso:", response);
      }, function(error) {
        console.error("Erro ao enviar email:", error);
        alert("O depósito foi registrado, mas ocorreu um erro ao enviar o email.");
      });
    } else {
      alert("O EmailJS não está disponível. O depósito foi registrado, mas o email não foi enviado.");
    }
  });

  // Feedback ao digitar o nome
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
});
