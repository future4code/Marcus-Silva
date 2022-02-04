import { Container } from "./styled";
import Bg_Web from "../../assets/Images/bg_web.svg";
import Dropdown from "../../components/Dropdown/Dropdown";
import RandomNumbers from "../../components/RandomNumbers/RandomNumbers";
import axios from "axios";
import { useEffect, useState } from "react";
import {
    BASE_URL,
    CONCURSO_URL,
    LOTERIA_CONCURSOS_URL,
} from "../../constants/urls";

const Home = () => {
    const [selected, setSelected] = useState([]);
    const [mostraConcurso, setMostraConcurso] = useState({});
    const [concursos, setConcursos] = useState([]);
    const [concursoSelecionado, setConcursoSelecionado] = useState({});

    useEffect(() => {
        axios
            .get(`${BASE_URL}`)
            .then((res) => {
                setSelected(res.data);
            })
            .catch((err) => {
                console.error(err.message);
            });
    }, []);

    useEffect(() => {
        axios
            .get(`${LOTERIA_CONCURSOS_URL}`)
            .then((res) => {
                setConcursos(res.data);
            })
            .catch((err) => {
                console.error(err.message);
            });
    }, []);

    useEffect(() => {
        if (mostraConcurso.id !== undefined) {
            const concurso = concursos.find((item) => {
                return item.loteriaId === mostraConcurso.id;
            });

            axios
                .get(`${CONCURSO_URL}${concurso.concursoId}`)
                .then((res) => {
                    console.log(res.data);
                    setConcursoSelecionado(res.data);
                })
                .catch((err) => {
                    console.error(err.message);
                });
        }
    }, [mostraConcurso]);

    return (
        <Container
            style={{
                backgroundImage: `url(${Bg_Web})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
            }}
        >
            <Dropdown
                selected={selected}
                setMostraConcurso={setMostraConcurso}
                mostraConcurso={mostraConcurso}
            />
            <RandomNumbers concursoSelecionado={concursoSelecionado} />
        </Container>
    );
};

export default Home;
