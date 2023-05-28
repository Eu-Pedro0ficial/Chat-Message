import { UserCircle } from "phosphor-react"
import { styled } from "styled-components"
import { connectionIo } from "../config/connection";
import { useEffect, useState } from "react";

const ListComponent = styled.aside `
  width: 20%;
  height: 100%;
  color: white;
  background-color: #211F2E;

  header {
    height: 170px;
    width: 100%;
    padding: 20px;
    label{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      input{
        border: 0;
        outline: 0;
        width: 100%;
        height: 50px;
        padding: 20px;
        font-size: 1.0rem;
        border-radius: 9999px;
        background-color: #282843;
        color: #ffffff;
      }
    }
  }


  main{
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    .message{
      width: 100%;
      padding: 20px;
      font-size: 1.4rem;
    }

    .contact{
      padding: 15px;
      display: flex;
      gap: 10px;
      align-items: center;
      width: 90%;
      border-bottom: 2px solid #61618f;
      svg{
        width: 4.0rem;
        height: 4.0rem;
        color: white;
      }
      .user-informations{
        display: flex;
        flex-direction: column;
        h3{
          cursor: pointer;
        }

        p{
          display: flex;
          align-items: center;
          gap: 5px;
          color: #00B37E;
          font-weight: bold;
          span{
            width: 12px;
            height: 12px;
            border-radius: 9999px;
            background-color: #00B37E;
          }
        }
      }
    }

    .contact:hover{
      svg, h3{
        color: #633BBC;
      }
    }
  }
  
`;

interface Idb {  

  id?: string;
  name?: string;
  password?: string;
  
}

export default function ListOfRooms(){

  const [users, setUsers] = useState<Idb[]>([]);
  const [filterUsers, setFilterUsers] = useState<Idb[]>([]);
  const [search, setSearch] = useState('');
  
  useEffect(()=>{
    connectionIo.emit("getUsers");
    connectionIo.on("getUsers", (data) => {
      setUsers(data);
    });
  }, [search])

  function handleChange(value: string){
    setSearch(value);
    const filteredUsers = users.filter((user) => user.name?.includes(value));
    setFilterUsers(filteredUsers);
  }

  function handleClick(e:any){
    
    const userNameContact = e.target.textContent;
    users.map((user) => {
      if(user.name === userNameContact){
        const userJson = localStorage.getItem('user');
        const userLoggedArray = userJson ? JSON.parse(userJson) : null;
        const userLogged = userLoggedArray[0];

        const otherUser = user;

        connectionIo.emit('creatingRoomWithFilteredUser', {otherUser, userLogged});
        connectionIo.on("creted room with user", (data) => {
          console.log(data);
          if(data){
            localStorage.setItem("otherUser", JSON.stringify(otherUser));
          }
        })

      }
    });
    
  }

  return (
    <ListComponent>
      <header>
        <label htmlFor="">
          <input type="text" onChange={(e) => handleChange(e.target.value)} value={search || ""} placeholder="Digite o nome desejado"/>
        </label>
      </header>
      <main>
        {
          filterUsers.length === 0 || filterUsers === undefined ?
            users.length === 0 ?
              <p className="message">
                Pesquise no campo, para renderizar os usuarios disponiveis
              </p>
            :
              users.map(user => (
                <div key={user.id} className="contact">
                  <UserCircle weight="fill" />
                  <div className="user-informations">
                    <h3 onClick={handleClick}>{user.name}</h3>
                    <p><span />Online</p>
                  </div>
                </div>
              ))
          :
          filterUsers.map(user => (
            <div key={user.id} className="contact">
              <UserCircle weight="fill" />
              <div className="user-informations">
                <h3>{user.name}</h3>
                <p><span />Online</p>
              </div>
            </div>
          ))
        }
      </main>
    </ListComponent>
  )
}
