import cors from 'cors'

export const corsOption = cors({
    origin: 'http://localhost:5174/',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
})