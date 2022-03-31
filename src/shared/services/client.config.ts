import { QueryClient } from 'react-query'

// React Query Client
export const queryClient = new QueryClient({
    defaultOptions: {
        queries:{
            refetchOnWindowFocus: false
        }
    }
})

