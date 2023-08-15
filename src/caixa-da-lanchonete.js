import { Cardapio } from "./cardapio.js";

class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {
        
        let valorTotal = 0;
        const itensExtrasRequeremPrincipal = [];
        
        if (metodoDePagamento !== "dinheiro" && metodoDePagamento !== "debito" && metodoDePagamento !== "credito") {
            return "Forma de pagamento inválida!";
        } 

        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }

        for (const itemInfo of itens) {
            const [codigo, quantidade] = itemInfo.split(",");
            const item = Cardapio.cardapio[codigo];

            if (!item) {
                return "Item inválido!";
            }

            valorTotal += item.valor * parseInt(quantidade);

            // Verificar se o item requer um item principal
            if (Cardapio.itensExtras[codigo]) {
                const itemPrincipal = Cardapio.itensExtras[codigo].itemPrincipal;
                if (itemPrincipal && !this.temItemNoCarrinho(itemPrincipal, itens)) {
                    itensExtrasRequeremPrincipal.push(codigo);
                }
            }
        }

        if (valorTotal === 0) {
            return "Quantidade inválida!";
        }

        if (itensExtrasRequeremPrincipal.length > 0) {
            return "Item extra não pode ser pedido sem o principal";
        }

        if (metodoDePagamento === "debito" || metodoDePagamento === "credito") {
            if (valorTotal <= 0) {
                return "Valor total inválido!";
            }
        }

        if (metodoDePagamento === "dinheiro") {
            valorTotal *= 0.95;
        } else if (metodoDePagamento === "credito") {
            valorTotal *= 1.03;
        }

        return `R$ ${valorTotal.toFixed(2).replace(".", ",")}`;
    }

    temItemNoCarrinho(codigoItem, itens) {
        for (const itemInfo of itens) {
            const [codigo] = itemInfo.split(",");
            if (codigo === codigoItem) {
                return true;
            }
        }
        return false;
    }
}

export { CaixaDaLanchonete };
