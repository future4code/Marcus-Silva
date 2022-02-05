import { Container } from "./styled";
import Dropdown from "../../components/Dropdown/Dropdown";
import axios from "axios";
import { useEffect, useState } from "react";
import {
    BASE_URL,
    CONCURSO_URL,
    LOTERIA_CONCURSOS_URL,
} from "../../constants/urls";
import Lottery from "../../components/Lottery/Lottery";

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
                    setConcursoSelecionado(res.data);
                })
                .catch((err) => {
                    console.error(err.message);
                });
        }
    }, [mostraConcurso]);

    return (
        <Container>
            <Dropdown
                selected={selected}
                setMostraConcurso={setMostraConcurso}
                mostraConcurso={mostraConcurso}
            />
            <Lottery concursoSelecionado={concursoSelecionado} />
        </Container>
    );
};

export default Home;
