import {Surreal} from "surrealdb.js";

const db = new Surreal()

export {db}

export const getSubDomain = (host: string) => {
    return host.split('.').slice(0, -2).join('.');
}