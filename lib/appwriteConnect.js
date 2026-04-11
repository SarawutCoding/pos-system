import { Client, Storage, ID } from "appwrite";

const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_API_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_PROJECT_ID)

export const storage = new Storage(client);
export { ID };