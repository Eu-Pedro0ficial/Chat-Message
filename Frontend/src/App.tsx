import { styled } from "styled-components";
import { Message } from "./components/Message";
import { Datetime } from "./components/Datetime";
import { UserInformations } from "./components/UserInformations";
import { TextInput } from "./components/TextInput";


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

  return (
    <MainComponents >
      <UserInformations />
      <main> 
        <Datetime />
        <Message content="Bom dia"/>
        <Message content="Ola, Bom dia!!!" styled="user"/>
      </main>
      <TextInput />
    </MainComponents>
  )
}

export default App
