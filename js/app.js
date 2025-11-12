let totalGeral;
limpar();
function adicionar() {
    // Recupera os valores do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    
    // Verificar se o produto selecionado é válido
    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }
    // Recupera e converte a quantidade antes de validar
    let quantidade = parseInt(document.getElementById('quantidade').value, 10);
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    let nomeProduto = produto.split('-')[0];

    // Extrai e converte o valor unitário (aceita vírgula como separador decimal)
    let rawValor = (produto.split('R$')[1] || '').replace(',', '.').trim();
    let valorUnitario = parseFloat(rawValor);
    if (isNaN(valorUnitario)) {
        alert('Valor do produto inválido.');
        return;
    }
    
    // Calcula o preço total (subtotal) do item
    let preco = quantidade * valorUnitario;
    
    let carrinho = document.getElementById('lista-produtos');
    
    // Adiciona o novo item ao HTML do carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
    </section>`;
    totalGeral = totalGeral + preco;
    
    // Atualiza o valor total no HTML (formatando com 2 casas decimais)
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral.toFixed(2)}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}

