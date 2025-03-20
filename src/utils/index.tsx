export const formataprice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export const getTotalPrice = (items: DishInterface[]) => {
  return items.reduce((acumulator, currentItem) => {
    if (currentItem.preco) {
      return (acumulator += currentItem.preco)
    }
    return 0
  }, 0)
}
