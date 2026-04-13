import { Client, Storage, ID } from "node-appwrite";

const client = new Client()
    .setEndpoint(process.env.API_ENDPOINT)
    .setProject(process.env.PROJECT_ID)
    .setKey(process.env.API_KEY)

export const storage = new Storage(client);
export { ID };