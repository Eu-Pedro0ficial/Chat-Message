import { styled } from "styled-components"
import { Link } from "react-router-dom";

const HomeComponent = styled.main `
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 50vw;
  height: 60vh;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-family: sans-serif;
  background-color: #211F2E;
  box-shadow: rgba(0, 0, 0, 0.385) 0px 20px 30px -10px;
  border-radius: 3px;
  h1{
    font-weight: bold;
    height: 10%;
    display: flex;
    gap: 10px;
    align-items: center;
    padding-left: 2.4rem;
    font-size: 2.4rem;
    color: #f8f8f8;
    span{
      color: #633BBC;
    }
  }

  p{
    width: 100%;
    padding-left: 2.4rem;
    color: #f8f8f8;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
    padding-right: 3rem;

    a{
      background-color: #633BBC;
      color: #f8f8f8;
      outline: 0;
      border: 0;
      padding: 1.4rem 2.4rem;
      border-radius: 9999px;
      font-size: 1.0rem;
      text-decoration: none;
    }

    a:hover{
      color: #211F2E;
    }
  }
`;

export default function Home(){
  return (
    <HomeComponent>
      <h1>Chat <span>Message</span></h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae est tempora aliquam, sint vitae amet nulla totam unde? Nihil iste natus veritatis ea incidunt quo fugit reprehenderit a magni et!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint fuga sed illo nam. Minus, dolor? Ipsam necessitatibus pariatur consequatur expedita impedit quisquam quia, nulla odio explicabo tempore earum consectetur officiis!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quibusdam laudantium eos dolorem eligendi, fuga doloremque tenetur aperiam esse voluptatibus! Rerum, suscipit fugit. Nobis quos aliquid fugit, earum sed consequuntur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, odio. Libero eaque repellat similique blanditiis. Fugiat voluptatem cumque, qui mollitia itaque dolore iste quam laborum quasi, nam repellat inventore a.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam ipsam quae magni, corporis provident architecto sint natus voluptatum commodi qui ad eaque inventore ex enim pariatur excepturi est iusto rerum!
      </p>
      <div>
        <Link to="/Register">Register</Link>
        <Link to="/Login">Login</Link>
      </div>
    </HomeComponent>
  )
}
