import cors from 'cors'

const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174']

export const corsOption = cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (like curl/postman)
        if (!origin) return callback(null, true)
        if (allowedOrigins.indexOf(origin) !== -1) {
            return callback(null, true)
        } else {
            return callback(new Error('Origin not allowed by CORS'))
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
})