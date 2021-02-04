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

const media = carrinho
    .filter(el => el.fragil)
    .map(el => el.qtde * el.preco)
    .reduce((acc, el) => {
            const newQtde = acc.qtde + 1
            const newTotal = acc.total + el
            console.log(acc, el)
            return {
                qtde: newQtde,
                total: newTotal,
                media: newTotal/newQtde
            }
        }, { qtde: 0, total: 0, media: 0 })


console.log(media)
