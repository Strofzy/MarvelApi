import axios from 'axios'
import { API_URL } from '../lib/constant'
import { QueryClient } from 'react-query'

// React Query Client
export const queryClient = new QueryClient({
    defaultOptions: {
        queries:{
            refetchOnWindowFocus: false
        }
    }
})

// Axios Client
export const AxiosClient = axios.create({
    baseURL: API_URL(),
    timeout: 1000
})

