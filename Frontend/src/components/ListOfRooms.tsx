import { UserCircle } from "phosphor-react"
import { styled } from "styled-components"

const ListComponent = styled.aside `
  width: 20%;
  height: 100%;
  color: white;
  background-color:rgb(97 93 133 / 10%);

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
        width: 90%;
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
    flex-direction: column;
    gap: 20px;

    .contact{
      cursor: pointer;
      padding: 15px;
      display: flex;
      gap: 10px;
      align-items: center;
      width: 100%;
      border-bottom: 1px solid #1A1924;
      svg{
        width: 4.0rem;
        height: 4.0rem;
        color: white;
      }
      .user-informations{
        display: flex;
        flex-direction: column;
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
  }
  
`;

export default function ListOfRooms(){

  return (
    <ListComponent>
      <header>
        <label htmlFor="">
          <input type="text" placeholder="Digite o nome desejado"/>
        </label>
      </header>
      <main>
        <div className="contact">
          <UserCircle weight="fill" />
          <div className="user-informations">
            <h3>Pedro Cardoso</h3>
            <p><span />Online</p>
          </div>
        </div>
        <div className="contact">
          <UserCircle weight="fill" />
          <div className="user-informations">
            <h3>Pedro Cardoso</h3>
            <p><span />Online</p>
          </div>
        </div>
        <div className="contact">
          <UserCircle weight="fill" />
          <div className="user-informations">
            <h3>Pedro Cardoso</h3>
            <p><span />Online</p>
          </div>
        </div>
      </main>
    </ListComponent>
  )
  
}
