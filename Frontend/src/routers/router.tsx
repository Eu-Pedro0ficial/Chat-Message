import {
    BrowserRouter, Route, Routes
} from "react-router-dom";
import Home from "../components/pages/Home";
import Chat from "../components/pages/Chat";
import { useEffect, useState } from "react";
import { keyframes, styled } from "styled-components";
import { PaperPlaneRight } from "phosphor-react";
import {Envelope} from "phosphor-react"



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

const Loading = styled.div<LoadingProps>`
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





export default function Router() {
    const [isLoading, setIsLoading] = useState(true);
    // Simulando um tempo de carregamento de 2 segundos
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 10000);
    }, [window.location]);

    console.log(window.location.href)

    if (isLoading) {
        // Renderiza o componente de loading enquanto estiver carregando
        return <Loading isTimer={10}>
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
        </Loading>;
    }

    return (
        <BrowserRouter >
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/Chat" element={<Chat />} />
            </Routes>
        </BrowserRouter>
    )
}
