import {DatabaseConnection} from "~/types";
import {H3Event} from "h3";

export const storeDatabaseCredentials = async (databaseCredentials: DatabaseConnection ) => {
    const storageId = await generateStorageId()
    console.log(JSON.parse(JSON.stringify(databaseCredentials)))
    await useStorage().setItem(storageId, JSON.stringify(databaseCredentials))
    return storageId
}

const generateStorageId = async () => {
    const randomString = Math.random().toString(36).substring(2, 15)
    const timeStamp = new Date().getTime().toString(36)
    return `${randomString}${timeStamp}`
}

export const getDatabaseCredentials = async (storageId: string) => {
    const credentials = await useStorage().getItem(storageId)
    return credentials as DatabaseConnection
}
export const getDatabaseCredentialsFromCookie = async (event: H3Event) => {
    const cookie = event.headers.get(`Cookie`)
    const getIdCookie = async (cookie: string) => {
        const regex =/(?<=Id=)[\w\d]+/;
        const match = cookie.match(regex)
        return match?.[0]
    }
    const storageId = await getIdCookie(<string>cookie)
    return getDatabaseCredentials(<string>storageId)

}

