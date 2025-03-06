import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      isAuthenticated: false,
      
      // Set token and auth status
      setToken: (token) => set({ 
        token,
        // isAuthenticated: !!token 
      }),

      // Clear token and auth status
      logout: () => set({ 
        token: null,
        // isAuthenticated: false
      }),
    }),
    {
      name: 'auth-storage', 
      getStorage: () => localStorage,
    }
  )
)

export default useAuthStore
