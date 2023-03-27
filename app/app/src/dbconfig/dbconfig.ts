
export const getConnectionString = (): string => {
    console.log(`mongodb+srv://${process.env.MONGO_DB_USER_NAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.gmsko4o.mongodb.net/?retryWrites=true&w=majority`)
    return `mongodb+srv://${process.env.MONGO_DB_USER_NAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.gmsko4o.mongodb.net/?retryWrites=true&w=majority`
}