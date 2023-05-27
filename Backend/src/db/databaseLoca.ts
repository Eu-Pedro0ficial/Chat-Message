import { Idb } from "../interfaces/Idb";

const db : Idb[] = [
  {
    name: "Pedro",
    id: "1",
    password: "123"
  },
  {
    name: "Arthur",
    id: "2",
    password: "123"
  },
  {
    name: "admin",
    id: "3",
    password: "admin"
  }
]

export const createUser = (user: any) => db.push(user)

export const getUsers = () => db;

export const getUser = (data:any) => {
  const loginFieldName = data.name;
  const loginFieldPassword = data.password;

  const userFound = db.filter(user => {
    if(user.name === loginFieldName){
      if(user.password === loginFieldPassword){
        return user;
      }
    }
  })

  if(userFound){
    return userFound
  }

  return false;
}