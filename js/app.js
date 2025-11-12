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


    // Verificar se a quantidade inserida é válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    let nomeProduto = produto.split('-')[0];
    
    // A linha abaixo estava com um erro de sintaxe.
    // A atribuição (=) deve vir depois do nome da variável.
    // Usamos parseFloat para garantir que o valor seja tratado como um número decimal.
    let valorUnitario = parseFloat(produto.split('R$')[1]);
    
    let quantidade = document.getElementById('quantidade').value; 

    if  (quantidade <= 0) {
        alert('Quantidade inválida');
        return;
    }
    
    // Calcula o preço total (subtotal) do item
    // Convertemos a quantidade para um número usando parseInt para garantir a operação matemática.
    let preco = parseInt(quantidade) * valorUnitario;
    
    let carrinho = document.getElementById('lista-produtos');
    
    // Adiciona o novo item ao HTML do carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
    </section>`;
    totalGeral = totalGeral + preco;
    
    // Atualiza o valor total no HTML
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent =  `R$ ${totalGeral}`;
    document.get.ElementById('quantidade').value = 0;
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}

