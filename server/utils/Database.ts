import {DatabaseConnection} from "~/types";
import {db} from "~/server/utils/index";
import {EventHandlerRequest, H3Event} from "h3";

export const connectToDatabase = async (credentials: DatabaseConnection, event?: H3Event) => {
    try {
        await db.connect(credentials.host, {
            database: credentials.database,
            namespace: credentials.namespace? credentials.namespace: "",
            auth: {
                username: credentials.username,
                password: credentials.password,
                namespace: credentials.namespace? credentials.namespace: "",
                database: credentials.database
            }
        })
        return {
            status: 200,
            message: "Connected to database successfully"
        }
    }catch (e) {
        return sendError(<H3Event<EventHandlerRequest>>event, createError({
            status: 502,
            statusMessage: "Could not connect to database",
        }))
    }

}

// export const runQuery = async (cookie?: string,query: () =>{} ) => {
//     await connectToDatabase(credentials)
//     await query()
// }