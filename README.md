# EBAC Banking

EBAC Banking é um sistema bancário web simples, desenvolvido como parte do curso de Full Stack Java da EBAC. O objetivo do projeto é simular a realização de depósitos bancários, aplicando conceitos fundamentais de desenvolvimento web, validação de formulários e integração com serviços externos.

## Tecnologias Aplicadas

- **HTML5**: Estruturação da página e do formulário de depósito.
- **CSS3**: Estilização responsiva e moderna da interface.
- **JavaScript (ES6+)**: Manipulação do DOM, validação de dados, feedback ao usuário e integração com EmailJS.
- **EmailJS**: Serviço externo utilizado para envio automático de emails de confirmação de depósito.

## O que foi aplicado no projeto

- **Validação de Formulário**: 
  - Verificação do nome completo do beneficiário (mínimo dois nomes).
  - Validação de email no formato correto.
  - Checagem de campos obrigatórios (nome, email, número da conta, valor).
  - Limite de caracteres para o campo de descrição.
  - Exibição de mensagens de erro dinâmicas e feedback visual nos campos.

- **Feedback ao Usuário**:
  - Mensagem de sucesso personalizada após depósito, exibindo todos os dados preenchidos.
  - Botão para limpar o formulário e ocultar a mensagem de sucesso.

- **Envio de Email Automático**:
  - Integração com o EmailJS para envio de email de confirmação para o beneficiário, contendo todos os detalhes do depósito.
  - Template de email customizado com informações do depósito, data/hora e email do beneficiário.

- **Boas Práticas de Código**:
  - Separação de responsabilidades entre HTML, CSS e JavaScript.
  - Uso de funções para validação e manipulação do formulário.
  - Tratamento de erros e mensagens claras para o usuário.

## Estrutura do Projeto

- `index.html`: Página principal com o formulário de depósito.
- `main.css`: Estilos visuais da aplicação.
- `main.js`: Lógica de validação, manipulação do formulário e integração com EmailJS.
- `email_template.html`: Template customizado para o email de confirmação enviado ao beneficiário.

## Como Usar

1. Clone o repositório para sua máquina local:
   ```bash
   git clone https://github.com/seu-usuario/ebac-banking.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd ebac-banking
   ```

3. Abra o arquivo `index.html` em seu navegador preferido.

4. Preencha o formulário com os dados do depósito e clique em "Depositar".

5. O beneficiário receberá um email automático de confirmação, caso o EmailJS esteja corretamente configurado.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request com melhorias, correções ou novas funcionalidades.

## Licença

Este projeto está licenciado sob a MIT License. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
