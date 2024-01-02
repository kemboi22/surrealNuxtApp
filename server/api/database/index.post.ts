import {DatabaseConnection} from "~/types";
import {connectToDatabase} from "~/server/utils/Database";
import {storeDatabaseCredentials} from "~/server/utils/Storage";

export default defineEventHandler(async (event) => {

  const body = await readBody(event)
  const {username, password, host, namespace, database} = await body as DatabaseConnection

  const message = await connectToDatabase({username, password, host, namespace, database}, event)
  if (message?.status !== 200) return message
  // Store Database Credentials
  const storageId = await storeDatabaseCredentials({username, password, host, namespace, database})
  setCookie(event, "Id", storageId)
  return { ...message, id: storageId }
})
