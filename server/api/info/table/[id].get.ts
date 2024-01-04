

export default defineEventHandler(async (event) => {
  await connectToDatabase(await getDatabaseCredentialsFromCookie(event))
  const tableName = event.context.params?.id as string
  return {
    status: 200,
    message: "Successfully retrieved table info",
    data: await db.query(`INFO FOR TABLE ${tableName}`)
  }
})
