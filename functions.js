document.getElementById('formm').addEventListener('submit', function (event) {
    event.preventDefault();
    const nome = document.getElementById('nomeproduto').value;
    const valor = parseFloat(document.getElementById('valorproduto').value);

    adcproduto(nome, valor);
    limparform();
});

function adcproduto(nome, valor) {
    const tabela = document.getElementById('tabelaprodutos').getElementsByTagName('tbody')[0];
    const novalinha = tabela.insertRow();
    const cedulanome = novalinha.insertCell(0);
    const cedulavalor = novalinha.insertCell(1);

    cedulanome.textContent = nome;
    cedulavalor.textContent = valor;
}
function limparform() {
    document.getElementById('formm').reset();
}