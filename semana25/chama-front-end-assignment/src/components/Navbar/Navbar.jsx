import { BsGithub } from "react-icons/bs";
import {
    ContainerLinks,
    ContainerNavbar,
    LinkAbout,
    LinkHome,
    LinkIcon,
} from "./styled";

const Navbar = (props) => {
    return (
        <ContainerNavbar>
            <div>
                <LinkIcon>
                    <BsGithub size={30} /> Github Username Searcher
                </LinkIcon>
            </div>
        </ContainerNavbar>
    );
};

export default Navbar;
