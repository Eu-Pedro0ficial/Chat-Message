import { styled } from "styled-components";

const DateComponent = styled.div `
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  font-family:'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color:#E1E1E6;
`

export function Datetime(){

  return <DateComponent className="date_time">Hoje 11:50</DateComponent>
}
