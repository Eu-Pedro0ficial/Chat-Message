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
          /* identical to box height */


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
            width: 14px;
            height: 14px;
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
        width: 19px;
      }
    }
  }

  main {
    flex: auto;
    height: 70%;
  }


  footer{
    display: flex;
    align-items: center;
    justify-content: center;
    flex: auto;
    height: auto;
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
            <p><div/> Online</p>
          </div>
        </div>
        <div className="close">
          <img src={Close} alt="" />
        </div>
      </header>
      <main>
        <h1>Main</h1>
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
