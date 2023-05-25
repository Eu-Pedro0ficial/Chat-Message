import { styled } from "styled-components";

interface IMessage {
  content: string
  styled?: string

}

const MessageComponent = styled.div `
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      
      .box{
        display: flex;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        color: #E1E1E6;
      }
      .paragraph {
        display: flex;
        width: fit-content;
        max-width: 50%;
        height: auto;
        word-break: break-all;
        padding: 14px;
        background: #633BBC;
        border-radius: 0px 8px 8px 8px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 16px;
        color: #E1E1E6;
      }

    .user{
      display: flex;
      align-items: end;
      flex-direction: column;
      width: 100%;
      gap: 0.5rem;


      .paragraph{
        
        background: #07847E;
        border-radius: 8px 8px 0px 8px;
      }
    }
`

export function Message(props:IMessage){

  return (
    <MessageComponent>
          <div className={`${props.styled}`}>
            <div className="box">
              Cecília - 9:05
            </div>
            <div className="paragraph">
              {props.content}
            </div>
          </div>
    </MessageComponent>
  )

}