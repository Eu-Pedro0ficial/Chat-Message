import { Envelope, PaperPlaneRight } from "phosphor-react";
import { keyframes, styled } from "styled-components";

const animSend = keyframes`

    from {
         position: relative;
        left: 0;
    }
    to {
        position: relative;
        left:94%;
      
    }

`


interface LoadingProps {
    isTimer: number;
}

const LoadingComponent = styled.div<LoadingProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    .content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 500px;
        height: 150px;
        padding: 1rem;
        .header-loading {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 100%;
            svg:nth-child(1) {
                position: relative;
                left:95%;
                animation: ${animSend} ${props => props.isTimer}s linear infinite;
                
            }
            svg:nth-child(2) {
                z-index: 1;
                background:  #14141E ;

            }
        }
        .main-loading {
           display: flex;
           justify-content: center;
           align-items: center;
          width: 100%;
          height: 100%;
          span  {
            color: #Fff;

            font-family: "DM Sans";
            font-size: 23px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.2rem;
          }
        }
    }

`


export default function Loading(){

  return (
    <LoadingComponent isTimer={10}>
      <div className="content">
          <div className="header-loading">
              <PaperPlaneRight size={29} color="#633BBC"/>
              
              <Envelope size={39} color="#633BBC"/>
          </div>
          <div className="main-loading">

            <span>
            Carregando...
            </span>
          </div>
      </div>
    </LoadingComponent>
  )

}