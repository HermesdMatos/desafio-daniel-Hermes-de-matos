class CaixaDaLanchonete {
    calcularValorDaCompra (formaDePagamento, itens) {
        const cardapio = {
            cafe: 3.00,
            chantily: 1.50,
            suco: 6.20,
            sanduiche: 6.50,
            queijo: 2.00,
            salgado: 7.25,
            combo1: 9.50,
            combo2: 7.50
        };
    
        const descontos = {
            dinheiro: 0.05
        };
    
        let valorTotal = 0;
        for (let i of itens) {
            const [item, quantidade] = i.split(',');
            if (!cardapio.hasOwnProperty(item)) {
                return "Item inválido!";
            }
            if (quantidade === '0') {
                return "Quantidade inválida!";
                
            }
        
    
            const valorDoItem = cardapio[item] * quantidade;
            let itemPrincipal = '';
            valorTotal += valorDoItem;
            if (item === 'chantily' || item === 'queijo') {
                if ( item === 'chantily') {
                    itemPrincipal = item;
                } else {
                    itemPrincipal = item;
                }
                if (itens.includes(`${itemPrincipal},1`)) {
                    return "Item extra não pode ser pedido sem o principal";
                }
            }
    
            if (item === "combo1" || item === "combo2") {
                valorTotal -= cardapio[item];
            }
        }
    
    
        if (valorTotal === 0) {
            return "Não há itens no carrinho de compra!";
        }
    
        const desconto = descontos[formaDePagamento];
        if (desconto) {
            valorTotal *= (1 - desconto);
        } else if (formaDePagamento === 'credito') {
            valorTotal *= 1.03;
        } else if(!["debito", "credito", "dinheiro"].includes(formaDePagamento)) {
            return "Forma de pagamento inválida!";
        } 
    
        return `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
    }
}

export { CaixaDaLanchonete };