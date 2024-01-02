import {Artist} from "~/types";
import {getSubDomain} from "~/server/utils";

export default defineEventHandler(async (event) => {
  const t = getRequestURL(event)
  console.log("Request URL: "+getSubDomain(t.host))
  const credentials = await getDatabaseCredentialsFromCookie(event)
  await connectToDatabase(credentials)
  const artists = await db.select("artist")

  return {status: 200, data: artists, message: "Success"}
})
