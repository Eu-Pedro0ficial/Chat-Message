import { styled } from "styled-components"
import { connectionIo } from "../config/connection";


const FormComponent = styled.div `
  width: 40%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #f8f8f8;
  padding: 20px;
  border-radius: 10px;

  form{
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
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
    }
    button:hover{
      filter: brightness(0.9);
    }
  }
`;

export default function Form(){


  function handleSubmit(e:any) {
    e.preventDefault();


  }


  return (
    <FormComponent>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <label htmlFor="name">Nome</label>
          <input type="text" name='name'  placeholder="digite seu nome"/>
        </div>
          <input hidden type="text"  name='id' defaultValue={Math.random()} placeholder="digite seu nome"/>
        <button>Cadastrar</button>
      </form>
    </FormComponent>
  )

}
