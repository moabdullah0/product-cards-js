import { create } from 'zustand'
import { toast } from 'react-toastify'
const useCartStore = create((set) => ({
  cartItems: [],
  
  addToCart: (product) => 
    set((state) => {
      const existingItem = state.cartItems.find(item => item.id === product.id)
      
      if (existingItem) {
        toast.success('Item quantity updated in cart')
        return {
          cartItems: state.cartItems.map(item =>
            item.id === product.id 
              ? {...item, quantity: item.quantity + 1}
              : item
          )
        }
      }
      
      toast.success('Item added to cart')
      return {
        cartItems: [...state.cartItems, { ...product, quantity: 1 }]
      }
    }),

  removeFromCart: (productId) =>
    set((state) => ({
      cartItems: state.cartItems.filter(item => item.id !== productId)
    })),

  updateQuantity: (productId, quantity) =>
    set((state) => ({
      cartItems: state.cartItems.map(item =>
        item.id === productId
          ? {...item, quantity: quantity}
          : item
      )
    })),

  clearCart: () => set({ cartItems: [] }),

  getTotalItems: () => 
    useCartStore.getState().cartItems.reduce((total, item) => total + item.quantity, 0),

  getTotalPrice: () =>
    useCartStore.getState().cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
}))

export default useCartStore
