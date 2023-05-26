import { useState } from "react";
import { styled } from "styled-components";
import { connectionIo } from "../config/connection";
import { useNavigate } from "react-router-dom";

const LoginComponent = styled.div `
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

export default function Login(){

  const navigate = useNavigate();
  const [inputName, setInputName] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  
  function handleSubmit(e:any){
    e.preventDefault();

    const formData = {
      name: inputName,
      password: inputPassword
    }

    connectionIo.emit("getUser", formData)

    connectionIo.on("getUser", (data) => {
      if(data){
        localStorage.setItem("user", JSON.stringify({...formData, "isLogged": true}));
        navigate('/Chat')
      }
    })
  }

  return (
    <LoginComponent>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <label htmlFor="name">Nome</label>
          <input type="text" name='name' value={inputName || ''} onChange={(e) => setInputName(e.target.value)}  placeholder="digite seu nome"/>
        </div>
        <div className='input-group'>
          <label htmlFor="password">Senha</label>
          <input type="password" name='password' value={inputPassword || ''} onChange={(e) => setInputPassword(e.target.value)}  placeholder="digite seu nome"/>
        </div>
        <button>Login</button>
      </form>
    </LoginComponent>
  )
}
