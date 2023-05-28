import { useState } from "react";
import { styled } from "styled-components";
import { connectionIo } from "../../config/connection";
import { useNavigate } from "react-router-dom";

const LoginComponent = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  .component{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:400px;
    height: auto;
    padding: 1rem;
    background: #211F2E;
    .sub-component{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      padding: 1rem;
      background: #1A1924;
      border: 1px solid #633BBC;
      .title {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        padding: 1rem;
        h1{
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 600;
          font-size: 15px;
          line-height: 23px;
          text-transform: uppercase;
          opacity: .9;
            color: #FFFFFF;

        }
      }
    
    
      form{
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 1.3rem;
        width: 100%;
        padding: 1rem;
        .input-group{
          display: flex;
          align-items: start;
          flex-direction: column;
          width: 100%;
          label{
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 500;
            font-size: 15px;
            line-height: 26px;
            text-align: center;
            color: #FFFFFF;
          }
          input{
            border: 0;
            outline: 0;
            width: 100%;
            border-radius:3px;
            height: 40px;
            background-color: #211F2E;
            border: 1px solid #633BBC;
            padding: 10px;
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 500;
            font-size: 13px;
            line-height: 26px;
        
            color: #FFFFFF;
          }
        }
        button {
          width: 100%;
          height: 37px;
          border: none;
          background-color: #1A1924;
          border: 1px solid #633BBC;
          transition: all 1s ease-in-out;
          border-radius: 5px;
     
          font-family: 'DM Sans';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 26px;
          text-align: center;
          text-transform: uppercase;
          color: #FFFFFF;
          opacity: .9;
    
          &:hover {
            width: 70%;
            background-color: #633BBC;
            transition: all 0.6s ease-in-out;
          }
        }
      }
    }
  }
`;

export default function Login() {

  const navigate = useNavigate();
  const [inputName, setInputName] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  function handleSubmit(e: any) {
    e.preventDefault();

    const formData = {
      name: inputName,
      password: inputPassword
    }

    connectionIo.emit("getUser", formData)

    connectionIo.on("getUser", (data) => {
      if (data) {
        localStorage.setItem("user", JSON.stringify({ ...data, "isLogged": true }));
        navigate('/Chat')
      }
    })
  }

  return (
    <LoginComponent>
      <div className="component">
        <div className="sub-component">
          <div className="title">

            <h1>Login</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className='input-group'>
              <label htmlFor="name">Nome</label>
              <input type="text" name='name' value={inputName || ''} onChange={(e) => setInputName(e.target.value)} placeholder="digite seu nome" />
            </div>
            <div className='input-group'>
              <label htmlFor="password">Senha</label>
              <input type="password" name='password' value={inputPassword || ''} onChange={(e) => setInputPassword(e.target.value)} placeholder="digite seu nome" />
            </div>
            <button>Login</button>
          </form>
        </div>
      </div>
    </LoginComponent>
  )
}
