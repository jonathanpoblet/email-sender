import dotenv from 'dotenv';

dotenv.config({
    path:
        process.env.NODE_ENV = '.env'
})

export const PORT = process.env.PORT

export const email = process.env.EMAIL;
export const password = process.env.PASSWORD;