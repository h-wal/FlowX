import axios from 'axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3008'

// Create axios instance with default config
const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
})

// Request interceptor for adding auth headers if needed
api.interceptors.request.use(
    (config) => {
        // Add any auth headers here if needed
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// Response interceptor for error handling
api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error)
        if (error.response?.status === 401) {
            // Handle unauthorized
            console.error('Unauthorized request')
        }
        return Promise.reject(error)
    }
)

// API functions
export const chatAPI = {
    // Get user ID
    getUserId: async (userName: string, userEmail: string) => {
        const response = await api.post('/getuserId', {
            userName,
            userEmail
        })
        return response.data
    },

    // Add chat message
    addChat: async (chat: string, userId: string, roomId: number) => {
        const response = await api.post('/addChat', {
            chat,
            userId,
            roomId
        })
        return response.data
    },

    // Get chat messages for a room
    getChat: async (roomId: number) => {
        const response = await api.post('/getchat', {
            roomId
        })
        return response.data
    },

    // Get room details
    getRoom: async (roomId: number) => {
        const response = await api.post('/getroom', {
            roomId
        })
        return response.data
    },

    // Get users
    getUsers: async () => {
        const response = await api.get('/users')
        return response.data
    }
}

export const authAPI = {
    // Sign in
    signIn: async (email: string, password: string) => {
        const response = await api.post('/signin', {
            email,
            password
        })
        return response.data
    },

    // Sign up
    signUp: async (name: string, email: string, password: string) => {
        const response = await api.post('/signup', {
            name,
            email,
            password
        })
        return response.data
    }
}

export default api
