import { styled } from "styled-components"
import { UserCircle } from "phosphor-react"

const HeaderComponent = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 2;
  padding: 0.5rem;
  
  background-color: #211F2E;
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
      svg{
        width: 4rem;
        height: 4rem;
        color: white;
      }
      .names {
        display: flex;
        flex-direction: column;
        margin: 0 0.6rem;
        


        span {
          display: flex;
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
          span {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: #00B37E;
          }
        }
      }
    } 
    }

`

export function UserInformations() {

  return (
    <HeaderComponent>
      <div className="header-container">
        <div className="informations">
          <UserCircle weight="fill" />
          <div className="names">
            <span>Global Chat</span>
            <p><span />Online</p>
          </div>
        </div>
      </div>
    </HeaderComponent>
  )
}
