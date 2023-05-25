import { styled } from "styled-components";
import ImageSend from "../assets/arrow.svg";

const FooterComponent = styled.footer `
  display: flex;
  align-items: center;
  justify-content: center;
  flex: auto;
  height: auto;
  background-color:rgb(97 93 133 / 10%);
  box-shadow: rgba(0, 0, 0, 0.24) 3px 0px 8px;
  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    width: 90%;
    height: 50px;

    input{
      border: 0;
      outline: 0;
      background-color: #282843;
      padding: 20px;
      min-width: 230px;
      width: 100%;
      border-radius: 70px;
      color: white;
      font-size: 1.0rem;
    }

    img {
      position: absolute;
      margin-right: 20px;
      cursor: pointer;
    }
  }

`

export function TextInput(){

  return (
    <FooterComponent>
      <div>
        <input type="text" placeholder="Digite sua mensagem" />
        <img src={ImageSend} alt="" />
      </div>
    </FooterComponent>
  )

}