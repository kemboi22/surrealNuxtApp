import {Artist} from "~/types";

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const artist = body as Artist
  const credentials = await getDatabaseCredentialsFromCookie(event)
    if (!credentials) return sendError(event, createError({
      status: 401,
      statusMessage: "Unauthorized"
    }))
  await connectToDatabase(credentials)

  const createArtists = async (artist: Artist) => {
      const result =await db.create("artist", {
        ...artist
      })
    return result
  }
  return {data: await createArtists(artist)}
})
