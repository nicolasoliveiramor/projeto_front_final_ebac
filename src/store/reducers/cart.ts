import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { PratoInterface } from '../../models'

type CartState = {
  items: PratoInterface[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
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
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, open, close } = cartSlice.actions
export default cartSlice.reducer
