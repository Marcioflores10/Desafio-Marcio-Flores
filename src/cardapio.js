class Cardapio {
    
    static cardapio = {
        cafe: {descricao: "Café", valor: 3.00},
        chantily: {descricao: "Chantilly (extra do Café)", valor: 1.50},
        suco: {descricao: "Suco Natural", valor: 6.20},
        sanduiche: {descricao: "Sanduíche", valor: 6.50},
        queijo: {descricao: "Queijo (extra do Sanduíche)", valor: 2.00},
        salgado: {descricao: "Salgado", valor: 7.25},
        combo1: {descricao: "1 Suco e 1 Sanduíche", valor: 9.50},
        combo2: {descricao: "1 Café e 1 Sanduíche", valor: 7.50},
    };

    static itensExtras = {
        chantily: {descricao: "Chantilly (extra do Café)", valor: 1.50, itemPrincipal: "cafe"},
        queijo: {descricao: "Queijo (extra do Sanduíche)", valor: 2.00, itemPrincipal: "sanduiche"},
    }

}

export { Cardapio };