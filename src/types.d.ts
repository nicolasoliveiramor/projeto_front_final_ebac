declare interface DishInterface {
  length: number
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

declare interface RestaurantInterface {
  id: number
  titulo: string
  destacado: boolean
  tipo: string[]
  avaliacao: number
  descricao: string
  capa: string
  cardapio: PratoInterface[]
}

declare interface Product {
  id: number
  price: number
}

declare interface PurchasePayload {
  products: Product[]
  delivery?: {
    receiver: string
    address: {
      description?: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment?: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

declare interface PurchaseResponse {
  orderId: string
}
