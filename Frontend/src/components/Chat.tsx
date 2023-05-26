import { useContextMessage } from "../context/useMessage";
import { styled } from "styled-components";
import { UserInformations } from './UserInformations';
import { Message } from './Message';
import { Datetime } from './Datetime';
import { TextInput } from './TextInput';
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
    width: 100vw;
    height: 70%;
    overflow: auto;
    position: relative;

  }
`;

export default function Chat(){
  
  const { data } = useContextMessage();

  return (
    <MainComponents>
      <UserInformations />
      <main>
        <Datetime />
        {data.message.length > 0 &&
          data.message.map(messageProps => messageProps.message !== "" && <Message key={messageProps.message} content={messageProps.message} time={messageProps.time} styled={messageProps.user} />)
        }
      </main>
      <TextInput />
    </MainComponents>
  )

}