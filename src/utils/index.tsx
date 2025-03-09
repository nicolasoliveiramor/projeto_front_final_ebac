export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const getTotalPrice = (items: PratoInterface[]) => {
  return items.reduce((acumulator, currentItem) => {
    if (currentItem.preco) {
      return (acumulator += currentItem.preco)
    }
    return 0
  }, 0)
}
