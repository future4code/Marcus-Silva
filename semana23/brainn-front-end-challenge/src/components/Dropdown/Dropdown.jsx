import axios from "axios";
import { useEffect, useState } from "react";
import {
    BASE_URL,
    CONCURSO_URL,
    LOTERIA_CONCURSOS_URL,
} from "../../constants/urls";
import { Circle, Span } from "../RandomNumbers/styled";

const Dropdown = () => {
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
        console.log(mostraConcurso);
        if (mostraConcurso.id !== undefined) {
            console.log(concursos);
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

    const onChangeValue = (mostraConcurso) => {
        setMostraConcurso(mostraConcurso);
    };

    return (
        <div className="w-50 p-3 h-100 d-flex flex-column  justify-content-between">
            <div className="dropdown ">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    {mostraConcurso.nome || "Selecione uma opção"}
                </button>

                <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                >
                    {selected.map((item, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => onChangeValue(item)}
                                value={item}
                            >
                                <a className="dropdown-item" href="#">
                                    {item.nome}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {concursoSelecionado.numeros &&
                concursoSelecionado.numeros.map((item, index) => {
                    return (
                        <Circle key={index}>
                            <Span>{item}</Span>
                        </Circle>
                    );
                })}

            <div>
                <h2>{mostraConcurso.nome}</h2>
            </div>

            <div>
                <p>Concurso número 000</p>
            </div>
        </div>
    );
};

export default Dropdown;
