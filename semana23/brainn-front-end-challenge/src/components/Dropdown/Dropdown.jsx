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
    const [id, setId] = useState();
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
        console.log(id);
        if (id !== undefined) {
            console.log(concursos);
            const concurso = concursos.find((item) => {
                return item.loteriaId === id;
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
    }, [id]);

    const onChangeValue = (id) => {
        setId(id);
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
                    Selecione uma opção
                </button>

                <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                >
                    {selected.map((item, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => onChangeValue(item.id)}
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
                            <Span>{item.numeros}</Span>
                        </Circle>
                    );
                })}

            <div>
                <h2>Mega-sena</h2>
            </div>

            <div>
                <p>Concurso número 000</p>
            </div>
        </div>
    );
};

export default Dropdown;
