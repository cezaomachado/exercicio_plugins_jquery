$(document).ready(function(){
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#telefone').mask('(00) 00000-0000');
    $('#cep').mask('00000-000');

    $('#formCadastro').on('submit', function(e) {
        e.preventDefault();
        // lógica de validação ou enviar os dados
        alert('Formulário enviado com sucesso!');
    });
});
