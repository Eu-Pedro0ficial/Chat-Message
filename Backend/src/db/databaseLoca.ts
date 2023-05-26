import { Idb } from "../interfaces/Idb";

const db : Idb[] = [
  {
    name: "pedro",
    id: "888",
    password: "123"
  }
]

export const createUser = (user: any) => db.push(user)

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