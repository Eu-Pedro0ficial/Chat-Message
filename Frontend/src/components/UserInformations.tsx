import { styled } from "styled-components"
import Close from "../assets/close.svg"
import User from "../assets/user.svg"

const HeaderComponent = styled.header `
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 2;
  padding: 0.5rem;
  
  background-color: rgb(97 93 133 / 10%);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  .header-container{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    .informations {
      display: flex;
      align-items: center;
      flex: 1;
      gap: 0.3rem;

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
      img {
        display: none;
        width: 19px;
        cursor: pointer;
        @media (max-width: 450px) {
          display: block;
        }
      }
    }
    }
  

`

export function UserInformations(){

  return (
    <HeaderComponent>
        <div className="header-container">
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
        </div>
    </HeaderComponent>
  )

}