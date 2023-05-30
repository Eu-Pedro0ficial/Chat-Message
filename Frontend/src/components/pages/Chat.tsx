import { styled } from "styled-components";
import { UserInformations } from '../UserInformations';
import { Message } from '../Message';
import { TextInput } from '../TextInput';
import { useEffect, useState } from "react";
import { connectionIo } from "../../config/connection";
import Loading from "../Loading";

const MainComponents = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.8rem 2rem;
    width: 100%;
    height: 70%;
    overflow: auto;
    position: relative;

  }
`;

export interface IObjectMessage {
  message: string;
  user: string;
  time: string;
}

interface IData {
  message: string;
  user: string;
  time: string;
  id: number
}

export default function Chat() {

  const [messages, setMessages] = useState<IObjectMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleChatMessage = (res: IData) => {
    const userIdJSON = localStorage.getItem(`id:${res.id}`)
    const userId = userIdJSON ? JSON.parse(userIdJSON) : null;
    console.log(userId);
    if (userId && res.id === userId) {
      res.user = "user";
      setMessages((data: IObjectMessage | any): IObjectMessage[] => [...data, res]);
      return;
    }
    setMessages((data: IObjectMessage | any): IObjectMessage[] => [...data, res]);
  };

  setTimeout(()=>{
    setIsLoading(false);
  }, 10000)

  useEffect(() => {
    connectionIo.on("chat message", handleChatMessage);
    return () => {
      connectionIo.off("chat message");
    };
  }, [])

  return (
    <>
      {
        isLoading ?
        <Loading /> :
        <MainComponents>
        <UserInformations />
        <main>
          {
            messages.length > 0 && 
            <>
              {
                messages.map(message => (
                  <Message key={message.message} content={message.message} time={message.time} styled={message.user} />
                ))

              }
            </>
          }
        </main>
        <TextInput />
      </MainComponents>
      }
    </>

    
  )

}
