export default defineEventHandler(async (event) => {
  const credentials = await getDatabaseCredentialsFromCookie(event)
  await connectToDatabase(credentials)
  return {
    status: 200,
    message: "Info retrieved Successfully",
    data: {
      root: await db.query("INFO FOR ROOT"),
      namespace: await db.query("INFO FOR NAMESPACE"),
      database: await db.query("INFO FOR DATABASE"),
      credentials:credentials
    }
  }
})
