import { styled } from "styled-components";
import image from "./assets/arrow.svg";

const MainComponents = styled.main `
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #1A1924;
  width: 100vw;
  height: 100vh;
  
  footer{
    display: flex;
    align-items: center;
    justify-content: center;

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
        <h1>Header</h1>
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
