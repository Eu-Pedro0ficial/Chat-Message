import { styled } from "styled-components";
import { FormEvent, useState } from "react";
import { PaperPlaneRight } from "phosphor-react";
import { connectionIo } from "../config/connection";
import { IObjectMessage } from "./pages/Chat";

const FooterComponent = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: auto;
  height: auto;
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    .div {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      width: 90%;
      height: 50px;
      input{
        border: 0;
        outline: 0;
        background: transparent;
        padding: 20px;
        padding-right: 70px;
        min-width: 230px;
        width: 100%;
        border-radius: 70px;
        color: white;
        font-size: 1.0rem; 
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: #E1E1E6;
        &::placeholder{
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 14px;
          color: #E1E1E6;
        }
      }
      button {
        display: flex;
        justify-content: end;
        align-items: center;
        border: none;
        position: relative;
        background: none;

        svg {
          position: absolute;
          width: 2.0rem;
          height: 2.0rem;
          color: #633BBC;
          margin-right: 2rem;
          object-fit: cover;
          cursor: pointer;
        
        }
      }
    }
  }

`

export function TextInput() {

  const date = new Date;
  const [input, setInput] = useState<string>("")

  function getHout() {
    return date.getHours();
  }

  function getMinutes() {
    return date.getMinutes();
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (input === "") {
      return;
    }
    const objectMessage: IObjectMessage = {
      message: input,
      user: "",
      time: `${getHout()}:${getMinutes()}`
    }
    connectionIo.emit("chat message", objectMessage);
    setInput("");
  }

  return (
    <FooterComponent>
      <form onSubmit={handleSubmit}>
        <div className="div">
          <input type="text" value={input || ""} onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setInput(e.target.value)} placeholder="Digite sua mensagem" />
          <button type="submit">
            <PaperPlaneRight weight="fill"  />
          </button>
        </div>
      </form>
    </FooterComponent>
  )
}
