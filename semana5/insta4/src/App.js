import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

import Robot1 from "../src/img/robot1.png";
import Robot2 from "../src/img/robot2.png";
import Butterfly from "../src/img/butterfly.png";
import Hummingbird from "../src/img/hummingbird.png";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={"paulinha"}
          fotoUsuario={"https://picsum.photos/50/50"}
          fotoPost={"https://picsum.photos/200/150"}
        />

        <Post nomeUsuario={"Bot 1"} fotoUsuario={Robot1} fotoPost={Butterfly} />

        <Post
          nomeUsuario={"Bot 2"}
          fotoUsuario={Robot2}
          fotoPost={Hummingbird}
        />
        <Post
          nomeUsuario={"Bot 2"}
          fotoUsuario={Robot2}
          fotoPost={Hummingbird}
        />
      </MainContainer>
    );
  }
}

export default App;
