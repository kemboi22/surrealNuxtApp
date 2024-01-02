import {getDatabaseCredentialsFromCookie} from "~/server/utils/Storage";

export default defineEventHandler(async (event) => {
  const credentials = await getDatabaseCredentialsFromCookie(event)
  return {
    status: 200,
    data: credentials,
  }
})
