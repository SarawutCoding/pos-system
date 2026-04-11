import { Client, Storage, ID } from "appwrite";

const client = new Client()
    .setEndpoint(process.env.API_ENDPOINT)
    .setProject(process.env.PROJECT_ID)

export const storage = new Storage(client);
export { ID };