import { Idb } from "../interfaces/Idb";

const db : Idb[] = []

export const createUser = (user: any) => db.push(user)

export const getUser = (user:any) => db.filter(u => u === user)