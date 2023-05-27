import { styled } from "styled-components"
import { connectionIo } from "../../config/connection";
import { useState } from "react";
import { userContentAuth } from "../../context/userAuth";
import { useNavigate } from "react-router-dom";


const FormComponent = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 40%;
  border-radius: 10px;
  padding: 20px;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  color: #f8f8f8;

  h1{
    padding: 20px;
    color: #633BBC;
    font-size: 2.4rem;
  }

  h1:hover{
    color: #f8f8f8;
  }

  form{
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    width: 100%;

    .input-group{
      display: flex;
      flex-direction: column;
      width: 80%;
      label{
        font-size: 1.5rem;
      }
      input{
        border: 0;
        outline: 0;
        width: 100%;
        border-radius: 9999px;
        height: 50px;
        background-color: #f8f8f8;
        padding: 10px;
      }
    }
    button{
      outline: 0;
      border: 0;
      width: 80%;
      height: 50px;
      background-color: #633BBC;
      color: #f8f8f8;
      border-radius: 9999px;
      font-size: 1.2rem;
      font-weight: bold;
    }
    button:hover{
      filter: brightness(0.9);
      color: black;
    }
  }
`;

export default function Form(){

  const { setAuth } = userContentAuth();

  function getRandomId(){
    return Math.floor(Math.random() * 100000);
  }

  const [inputName, setInputName] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e:any) {
    e.preventDefault();
    const id = getRandomId()

    const formData = {
      name: inputName,
      id: `${id}`,
      password: inputPassword
    }

    connectionIo.emit("createUser", formData);
    setInputName('');

    connectionIo.on('created User', (resp) => {
      setAuth({
        name: inputName,
        id: `${id}`,
        isLogged: resp,
        password: inputPassword
      })
    })

    localStorage.setItem("user", JSON.stringify({...formData, "isLogged": true}));
    navigate('/Chat');
  }

  return (
    <FormComponent>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <label htmlFor="name">Nome</label>
          <input type="text" name='name' value={inputName || ''} onChange={(e) => setInputName(e.target.value)}  placeholder="digite seu nome"/>
        </div>
        <div className='input-group'>
          <label htmlFor="password">Senha</label>
          <input type="password" name='password' value={inputPassword || ''} onChange={(e) => setInputPassword(e.target.value)}  placeholder="digite seu nome"/>
        </div>
        <button>Cadastrar</button>
      </form>
    </FormComponent>
  )

}
