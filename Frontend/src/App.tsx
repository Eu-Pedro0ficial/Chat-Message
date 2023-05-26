import { FastForwardCircle } from 'phosphor-react';
import Chat from './components/Chat'
import Form from "./components/Form"

function App() {

  const userLogged = false;

  return (
    <>
      {
        userLogged ? <Chat /> : <Form />
      }
    </>
  )
}

export default App
