import { styled } from "styled-components";

const MessageComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  .box{
    display: flex;
    margin-bottom: 0.5rem;
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
    background: #1A1924;
    border: 1px solid #633BBC;
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
      background: #1A1924;
      border: 1px solid #07847E;
      border-radius: 8px 8px 0px 8px;
    }
  }
`

interface IMessage {
  content: string
  styled?: string
  time: string
}

export function Message(props: IMessage) {

  return (
    <MessageComponent>
      <div className={`${props.styled}`}>
        <div className="box">
          Anonimo - {props.time}
        </div>
        <div className="paragraph">
          {props.content}
        </div>
      </div>
    </MessageComponent>
  )
}
