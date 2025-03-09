import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: PratoInterface[]
  isOpen: boolean
  isCheckoutOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isCheckoutOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<PratoInterface>) => {
      const prato = state.items.find((item) => item.id === action.payload.id)

      if (prato) {
        alert(`O prato ${prato.nome} já esta no carrinho.`)
      } else {
        state.items.push(action.payload)
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clear: (state) => {
      state.items = []
      state.isCheckoutOpen = false
      state.isOpen = false
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    openCheckout: (state) => {
      state.isOpen = false
      state.isCheckoutOpen = true
    },
    closeCheckout: (state) => {
      state.isCheckoutOpen = false
    }
  }
})

export const { add, remove, clear, open, close, closeCheckout, openCheckout } =
  cartSlice.actions
export default cartSlice.reducer
