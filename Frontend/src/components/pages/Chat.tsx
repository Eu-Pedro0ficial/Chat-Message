import ListOfRooms from "../ListOfRooms";
import Room from "../Room";
import { styled } from "styled-components";

const ContainerComponent = styled.main `
  display: flex;
  width: 100vw;
  height: 100vh;

`;

export default function Chat(){

  return (
    <ContainerComponent>
      <ListOfRooms />
      <Room />
    </ContainerComponent>
  )

}
