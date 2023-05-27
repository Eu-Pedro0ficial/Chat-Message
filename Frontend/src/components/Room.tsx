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
  width: 80%;
  height: 100%;

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

export default function Room(){
  
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