
  var valorTotal = [0, 0];
  var valorProduto = [40.00, 50.00];
  var qtd = [0, 0];

  function adicionarItem(item) {
    var quantidade = document.getElementById("quantidade" + item);
    var total = document.getElementById("total" + item);
    qtd[item] += 1;
    valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
    quantidade.innerHTML = qtd[item];
    total.innerHTML = valorTotal[item].toFixed(2);
    valorCompra(); // Atualiza o subtotal
  }

  function removerItem(item) {
    if (qtd[item] > 0) {
      qtd[item] -= 1;
      var quantidade = document.getElementById("quantidade" + item);
      var total = document.getElementById("total" + item);
      quantidade.innerHTML = qtd[item];
      valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
      total.innerHTML = valorTotal[item].toFixed(2);
      valorCompra(); // Atualiza o subtotal
    }
  }

  function valorCompra() {
    var valoresTotalCompra = document.getElementById("valorTotalCompra");
    var valor = 0;
    for (var i = 0; i < valorTotal.length; i++) {
      valor += valorTotal[i];
    }
    valoresTotalCompra.innerHTML = valor.toFixed(2);
  }
