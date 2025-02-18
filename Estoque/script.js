document.getElementById('formProduto').addEventListener('submit', function (event) {
    event.preventDefault();

    const codigo = document.getElementById('codigo').value;
    const nome = document.getElementById('nome').value;
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const preco = parseFloat(document.getElementById('preco').value);
    const custo = parseFloat(document.getElementById('custo').value);
    const lucro = preco - custo;

    // Criar linha para o produto na tabela
    const tabela = document.getElementById('tabelaEstoque').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();

    novaLinha.innerHTML = `
        <td>${codigo}</td>
        <td>${nome}</td>
        <td>${quantidade}</td>
        <td>R$ ${preco.toFixed(2)}</td>
        <td>R$ ${custo.toFixed(2)}</td>
        <td>R$ ${lucro.toFixed(2)}</td>
        <td><button class="editar" onclick="editarProduto(this)">Editar</button> <button class="excluir" onclick="excluirProduto(this)">Excluir</button></td>
    `;

    // Limpar os campos após adicionar o produto
    document.getElementById('formProduto').reset();
});

function excluirProduto(botao) {
    const linha = botao.parentElement.parentElement;
    linha.remove();
}

function editarProduto(botao) {
    const linha = botao.parentElement.parentElement;
    const colunas = linha.getElementsByTagName('td');

    // Preencher os campos com os dados do produto
    document.getElementById('codigo').value = colunas[0].innerText;
    document.getElementById('nome').value = colunas[1].innerText;
    document.getElementById('quantidade').value = colunas[2].innerText;
    document.getElementById('preco').value = colunas[3].innerText.replace('R$ ', '');
    document.getElementById('custo').value = colunas[4].innerText.replace('R$ ', '');

    // Remover a linha para substituição
    excluirProduto(botao);
}
