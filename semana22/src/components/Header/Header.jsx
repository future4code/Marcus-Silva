import React from "react";
import {
    ContainerHeader,
    Nav,
    NavFirstContainer,
    ProfilePic,
    Search,
} from "./styled";

const Header = () => {
    return (
        <div>
            <Nav>
                <NavFirstContainer>
                    <h1>Promoflix</h1>
                    <Search type="search" placeholder="Search" />
                </NavFirstContainer>

                <div>
                    <ProfilePic src="" alt="" />
                </div>
            </Nav>

            <ContainerHeader>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                excepturi reprehenderit commodi itaque accusantium dolores.
            </ContainerHeader>
        </div>
    );
};

export default Header;
