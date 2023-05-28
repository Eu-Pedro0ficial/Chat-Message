import { keyframes, styled } from "styled-components"
import { Link } from "react-router-dom";


const animFrames = keyframes`

 50% {
  transform: scale(1.1);
 }
 100% {
  transform: scale(0.9);
 }

`


const HomeComponent = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  padding: 2rem;
  .flex  {
    display: flex;
    flex-direction: column;
    gap: 1rem;
      width: 700px;
      height: auto;
      background-color: #211F2E;
      padding: 2rem;
      .title {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.7rem;
        height: auto; 

        h1 {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 23px;
          text-transform: uppercase;
          color: #FFFFFF;
          span {
            color: #633BBC;
          }
        }
      }

      .content {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        background: #1A1924;
        border: 1px solid #633BBC;

        p {
          font-family: 'DM Sans';
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 26px;
          text-align: center;
          opacity: .9;
          color: #FFFFFF;

        }
      
      }
      .footer{
        display: flex;
        gap: 0.7rem;
        justify-content: end;
        flex: 1;
        height: 100%;
        margin-right: 2rem;
        transition: all 1s ease-in-out;
        button {
          width: 123px;
          height: 37px;
          border: none;
          background-color: #1A1924;
          border: 1px solid #633BBC;
          transition: all 1s ease-in-out;
          border-radius: 5px;
          
          a {
            text-decoration: none;
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 26px;
            text-align: center;
            text-transform: uppercase;
            color: #FFFFFF;
            opacity: .9;
          }
          &:hover {
            background-color: #633BBC;
            transition: all 0.6s ease-in-out;
            animation: ${animFrames} 0.6s ;
         

            transform: scale(0.9);
          }
        }
      }
  }
`;

export default function Home() {
  return (
    <HomeComponent>
      <div className="flex">
        <div className="title">

          <h1>Chat <span>Message</span></h1>
        </div>

        <div className="content">

          <p>
            Um chat message, ou mensagem de chat, é uma unidade de comunicação em tempo real trocada entre usuários em um ambiente de chat ou mensagens instantâneas. Essas mensagens são amplamente utilizadas em plataformas de bate-papo online, aplicativos de mensagens, redes sociais e até mesmo em sistemas de suporte ao cliente.</p>
          <div>
          </div>

        </div>
        <div className="footer">
          <button><Link to="/Register">Register</Link></button>
          <button><Link to="/Login">Login</Link></button>
        </div>
      </div>
    </HomeComponent>
  )
}
