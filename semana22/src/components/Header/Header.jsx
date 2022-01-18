import React from "react";
import {
    Buttons,
    ContainerButtons,
    ContainerHeader,
    InputSearchContainer,
    DivBtn,
    Nav,
    NavFirstContainer,
    ProfilePic,
    Search,
} from "./styled";
import { BsSearch } from "react-icons/bs";

const Header = () => {
    return (
        <div>
            <Nav>
                <NavFirstContainer>
                    <h1>TMDB</h1>

                    <InputSearchContainer>
                        <BsSearch className="bssearch" />
                        <Search type="search" placeholder="Busca" />
                    </InputSearchContainer>
                </NavFirstContainer>

                <div>
                    <ProfilePic src="" alt="" />
                </div>
            </Nav>

            <ContainerHeader>
                <h2>
                    Milhões de filmes, séries e pessoas para descobrir. Explore
                    já.
                </h2>

                <h3>Filtre por:</h3>
                <ContainerButtons>
                    <DivBtn>
                        <label>Comédia</label>
                        <Buttons>
                            <img src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/48/000000/external-smile-emoji-wanicon-lineal-color-wanicon.png" />
                        </Buttons>
                    </DivBtn>

                    <DivBtn>
                        <label>Ação</label>
                        <Buttons>
                            <img src="https://img.icons8.com/doodle/48/000000/boom.png" />
                        </Buttons>
                    </DivBtn>

                    <DivBtn>
                        <label>Super Heróis</label>
                        <Buttons>
                            <img src="https://img.icons8.com/doodle/48/000000/iron-man.png" />
                        </Buttons>
                    </DivBtn>

                    <DivBtn>
                        <label>Ficção Científica</label>
                        <Buttons>
                            <img src="https://img.icons8.com/doodle/48/000000/sci-fi.png" />
                        </Buttons>
                    </DivBtn>

                    <DivBtn>
                        <label>Fantasia</label>
                        <Buttons>
                            <img src="https://img.icons8.com/doodle/48/000000/fantasy.png" />
                        </Buttons>
                    </DivBtn>

                    <DivBtn>
                        <label>Terror</label>
                        <Buttons>
                            <img src="https://img.icons8.com/doodle/48/000000/scream.png" />
                        </Buttons>
                    </DivBtn>

                    <DivBtn>
                        <label>Musical</label>
                        <Buttons>
                            <img src="https://img.icons8.com/dusk/48/000000/musical.png" />
                        </Buttons>
                    </DivBtn>

                    <DivBtn>
                        <label>Romance</label>
                        <Buttons>
                            <img src="https://img.icons8.com/office/48/000000/romantic-movies.png" />
                        </Buttons>
                    </DivBtn>

                    <DivBtn>
                        <label>Ação</label>
                        <Buttons>
                            <img src="https://img.icons8.com/external-flat-icons-maxicons/48/000000/external-action-movie-flat-flat-icons-maxicons-3.png" />
                        </Buttons>
                    </DivBtn>

                    <DivBtn>
                        <label>Crime</label>
                        <Buttons>
                            <img src="https://img.icons8.com/external-filled-outline-icons-maxicons/48/000000/external-crime-movie-filled-outline-filled-outline-icons-maxicons.png" />
                        </Buttons>
                    </DivBtn>

                    <DivBtn>
                        <label>Família</label>
                        <Buttons>
                            <img src="https://img.icons8.com/external-flat-icons-maxicons/48/000000/external-cinema-movie-flat-flat-icons-maxicons.png" />
                        </Buttons>
                    </DivBtn>

                    <DivBtn>
                        <label>Drama</label>
                        <Buttons>
                            <img src="https://img.icons8.com/office/48/000000/drama.png" />
                        </Buttons>
                    </DivBtn>
                </ContainerButtons>
            </ContainerHeader>
        </div>
    );
};

export default Header;
