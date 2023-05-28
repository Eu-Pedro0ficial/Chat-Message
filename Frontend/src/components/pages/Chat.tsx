import { useEffect, useState } from "react";
import ListOfRooms from "../ListOfRooms";
import Room from "../Room";
import { styled } from "styled-components";

const ContainerComponent = styled.main `
  display: flex;
  width: 100vw;
  height: 100vh;

`;

export default function Chat(){

  const [otherUser, setOtherUser] = useState();

  useEffect(()=>{
    const otherUserJson = localStorage.getItem("otherUser");
    setOtherUser(otherUserJson ? JSON.parse(otherUserJson) : null);
  }, [])

  return (
    <ContainerComponent>
      <ListOfRooms />
      {
        otherUser && <Room />
      }
    </ContainerComponent>
  )

}
