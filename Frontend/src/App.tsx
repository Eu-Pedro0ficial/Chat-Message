import { styled } from "styled-components";
import { Message } from "./components/Message";
import { Datetime } from "./components/Datetime";
import { UserInformations } from "./components/UserInformations";
import { TextInput } from "./components/TextInput";
import { useContextMessage } from "./context/useMessage";


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

function App() {

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

export default App
