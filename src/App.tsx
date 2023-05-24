import { styled } from "styled-components";
import image from "./assets/arrow.svg";
import Close from "./assets/close.svg"
import User from "./assets/user.svg"


const MainComponents = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  header {
    display: flex;
    justify-content: center;
    flex: 2;
    padding: 0.5rem;
    
    background-color:rgb(97 93 133 / 10%);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    .informations {
      display: flex;
      align-items: center;
      flex: 1;
      gap: 0.3rem;
      padding: 0 3rem;
      .names {
        display: flex;
        flex-direction: column;
        margin: 0 0.6rem;


        span {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 19px;
          color: #E1E1E6;
        }

        p {
          display: flex;
          align-items: center;
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 700;
          font-size: 12px;
          
          color: #00B37E;
          gap: 0.3rem;
          div {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: #00B37E;
          }
        }
      }
    } 
    .close {
      display: flex;
      justify-content: end;
      flex: 1;
      padding: 0 3rem;
      img {
        display: none;
        width: 19px;
        cursor: pointer;
        @media (max-width: 320px) {
          display: block;
        }
      }
    }
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.8rem 2rem;
    width: 100vw;
    height: 70%;
    overflow: auto;
    position: relative;


    .date_time {
    position: absolute;
    left: 50%;
    font-family:'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color:#E1E1E6;
    }


    .mensage_container{
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      
      .box{
        display: flex;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        color: #E1E1E6;
      }
      .paragraph {
        display: flex;
        width: fit-content;
        max-width: 50%;
        height: auto;
        word-break: break-all;
        padding: 14px;
        background: #633BBC;
        border-radius: 0px 8px 8px 8px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: #E1E1E6;
      }
    }

    .user{
      display: flex;
      align-items: end;
      flex-direction: column;
      width: 100%;
      gap: 0.5rem;


      .paragraph{
        
        background: #07847E;
        border-radius: 8px 8px 0px 8px;
      }
    }
  }


  footer{
    display: flex;
    align-items: center;
    justify-content: center;
    flex: auto;
    height: auto;
    background-color:rgb(97 93 133 / 10%);
    box-shadow: rgba(0, 0, 0, 0.24) 3px 0px 8px;
    div {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      position: relative;
      width: 90%;
      height: 50px;

      input{
        border: 0;
        outline: 0;
        background-color: #282843;
        padding: 20px;
        min-width: 230px;
        width: 100%;
        border-radius: 70px;
        color: white;
        font-size: 1.0rem;
      }

      img {
        position: absolute;
        margin-right: 20px;
        cursor: pointer;
      }
    }

  }
`;

function App() {

  return (
    <MainComponents >
      <header>
        <div className="informations">
          <img src={User} alt="" />
          <div className="names">
            <span>Pedro Cardoso</span>
            <p><div />Online</p>
          </div>
        </div>
        <div className="close">
          <img src={Close} alt="" />
        </div>
      </header>
      <main> 
        <div className="date_time">Hoje 11:50</div>
        <div className="mensage_container">
          <div className="box">
            Cecília - 9:05
          </div>
          <div className="paragraph">
            Bom dia!!!!
          </div>
        </div>
        <div className="mensage_container user">
          <div className="box">
            Voce - 9:05
          </div>
          <div className="paragraph">
          dwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwdwdwddddddddddddddddddddddddddwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwdwdwddddddddddddddddddddddddddwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwdwdwddddddddddddddddddddddddd
          </div>
        </div>
        
      </main>
      <footer>
        <div>
          <input type="text" placeholder="Digite sua mensagem" />
          <img src={image} alt="" />
        </div>
      </footer>
    </MainComponents>
  )
}

export default App
