const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.90, fragil: true },
    { nome: 'Impressora', qtde: 1, preco: 600.90, fragil: true  },
    { nome: 'Caderno', qtde: 2, preco: 19.20, fragil: false },
    { nome: 'Lapis', qtde: 3, preco: 5.50, fragil: false  },
    { nome: 'Tesoura', qtde: 1, preco: 9.50, fragil: true  }
]

// 1. FRAGIL: TRUE

// 2. QTDE * PRECO -> TOTAL

// 3. MEDIA TOTAIS

const isFragil = el => el.fragil

const getTotal = el => el.qtde * el.preco

const getMedia = (acc, el) => {
    const newQtde = acc.qtde + 1
    const newTotal = acc.total + el
    return {
        qtde: newQtde,
        total: newTotal,
        media: newTotal/newQtde
    }
}

const mediaInicial = { qtde: 0, total: 0, media: 0 }

const media = carrinho
    .filter(isFragil)
    .map(getTotal)
    .reduce(getMedia, mediaInicial)
    .media


console.log(`A média é ${media}`)
