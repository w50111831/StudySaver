import {MongoClient, Db} from "mongodb";

const uri = `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASSWORD}@${process.env.MONGODB_CLUSTER}/?appName=Cluster0`;

if (!uri) {
    throw new Error("No uri");
}
const client = new MongoClient(uri);

let db: Db;

export async function connectToDatabase() {
    await client.connect();
    db = client.db(process.env.DB_NAME);
    console.log("Connected to database");
}

export function getDb(): Db {
    if (!db) {
        throw new Error("Database not connected");
    }
    return db;
}