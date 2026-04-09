'use client'

import React, { createContext, useContext, useReducer, useEffect, useState } from 'react'

export interface Product {
  id: string
  name: string
  slug: string
  brand: string
  category: string
  price: number
  description: string
  images: string[]
  tags: string[]
}

export interface CartItem {
  product: Product
  quantity: number
}

interface CartState {
  items: CartItem[]
  isOpen: boolean
}

type CartAction =
  | { type: 'ADD_ITEM'; product: Product }
  | { type: 'REMOVE_ITEM'; productId: string }
  | { type: 'UPDATE_QUANTITY'; productId: string; quantity: number }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_DRAWER' }
  | { type: 'OPEN_DRAWER' }
  | { type: 'CLOSE_DRAWER' }
  | { type: 'HYDRATE'; items: CartItem[] }

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'HYDRATE':
      return { ...state, items: action.items }

    case 'ADD_ITEM': {
      const existing = state.items.find(i => i.product.id === action.product.id)
      if (existing) {
        return {
          ...state,
          items: state.items.map(i =>
            i.product.id === action.product.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
          isOpen: true,
        }
      }
      return {
        ...state,
        items: [...state.items, { product: action.product, quantity: 1 }],
        isOpen: true,
      }
    }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(i => i.product.id !== action.productId),
      }

    case 'UPDATE_QUANTITY': {
      if (action.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(i => i.product.id !== action.productId),
        }
      }
      return {
        ...state,
        items: state.items.map(i =>
          i.product.id === action.productId
            ? { ...i, quantity: action.quantity }
            : i
        ),
      }
    }

    case 'CLEAR_CART':
      return { ...state, items: [] }

    case 'TOGGLE_DRAWER':
      return { ...state, isOpen: !state.isOpen }

    case 'OPEN_DRAWER':
      return { ...state, isOpen: true }

    case 'CLOSE_DRAWER':
      return { ...state, isOpen: false }

    default:
      return state
  }
}

interface CartContextValue {
  items: CartItem[]
  isOpen: boolean
  totalItems: number
  totalPrice: number
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  toggleDrawer: () => void
  openDrawer: () => void
  closeDrawer: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false })
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('cart-items')
      if (saved) {
        const parsed = JSON.parse(saved) as CartItem[]
        dispatch({ type: 'HYDRATE', items: parsed })
      }
    } catch {}
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    try {
      localStorage.setItem('cart-items', JSON.stringify(state.items))
    } catch {}
  }, [state.items, hydrated])

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0)
  const totalPrice = state.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0)

  return (
    <CartContext.Provider value={{
      items: state.items,
      isOpen: state.isOpen,
      totalItems,
      totalPrice,
      addItem: (product) => dispatch({ type: 'ADD_ITEM', product }),
      removeItem: (productId) => dispatch({ type: 'REMOVE_ITEM', productId }),
      updateQuantity: (productId, quantity) => dispatch({ type: 'UPDATE_QUANTITY', productId, quantity }),
      clearCart: () => dispatch({ type: 'CLEAR_CART' }),
      toggleDrawer: () => dispatch({ type: 'TOGGLE_DRAWER' }),
      openDrawer: () => dispatch({ type: 'OPEN_DRAWER' }),
      closeDrawer: () => dispatch({ type: 'CLOSE_DRAWER' }),
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
