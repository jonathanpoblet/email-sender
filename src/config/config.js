import dotenv from 'dotenv';

dotenv.config({
    path:
        process.env.NODE_ENV = '.env'
})

export const PORT = process.env.PORT || 3000