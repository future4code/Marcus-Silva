import React from "react";
import {
    Buttons,
    ContainerHeader,
    InputSearchContainer,
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
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    excepturi reprehenderit commodi itaque accusantium dolores.
                </p>

                <div>
                    <label htmlFor="">
                        Comédia
                        <Buttons>
                            <img src="https://img.icons8.com/doodle/48/000000/comedy--v2.png" />
                        </Buttons>
                    </label>

                    <label htmlFor="">
                        Ação
                        <Buttons>
                            <img src="https://img.icons8.com/doodle/48/000000/boom.png" />
                        </Buttons>
                    </label>

                    <label htmlFor="">
                        Super Heróis
                        <Buttons>
                            <img src="https://img.icons8.com/doodle/48/000000/iron-man.png" />
                        </Buttons>
                    </label>

                    <label htmlFor="">
                        Ficção Científica
                        <Buttons>
                            <img src="https://img.icons8.com/doodle/48/000000/sci-fi.png" />
                        </Buttons>
                    </label>

                    <label htmlFor="">
                        Fantasia
                        <Buttons>
                            <img src="https://img.icons8.com/doodle/48/000000/fantasy.png" />
                        </Buttons>
                    </label>

                    <label htmlFor="">
                        Terror
                        <Buttons>
                            <img src="https://img.icons8.com/doodle/48/000000/scream.png" />
                        </Buttons>
                    </label>

                    <label htmlFor="">
                        Musical
                        <Buttons>
                            <img src="https://img.icons8.com/dusk/48/000000/musical.png" />
                        </Buttons>
                    </label>

                    <label htmlFor="">
                        Romance
                        <Buttons>
                            <img src="https://img.icons8.com/office/48/000000/romantic-movies.png" />
                        </Buttons>
                    </label>

                    <label htmlFor="">
                        Ação
                        <Buttons>
                            <img src="https://img.icons8.com/external-flat-icons-maxicons/48/000000/external-action-movie-flat-flat-icons-maxicons-3.png" />
                        </Buttons>
                    </label>

                    <label htmlFor="">
                        Crime
                        <Buttons>
                            <img src="https://img.icons8.com/external-filled-outline-icons-maxicons/48/000000/external-crime-movie-filled-outline-filled-outline-icons-maxicons.png" />
                        </Buttons>
                    </label>

                    <label htmlFor="">
                        Família
                        <Buttons>
                            <img src="https://img.icons8.com/external-flat-icons-maxicons/48/000000/external-cinema-movie-flat-flat-icons-maxicons.png" />
                        </Buttons>
                    </label>

                    <label htmlFor="">
                        Drama
                        <Buttons>
                            <img src="https://img.icons8.com/office/48/000000/drama.png" />
                        </Buttons>
                    </label>
                </div>
            </ContainerHeader>
        </div>
    );
};

export default Header;
