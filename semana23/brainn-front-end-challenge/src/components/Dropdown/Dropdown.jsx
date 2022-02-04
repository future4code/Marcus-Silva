import { Circle, Span } from "../RandomNumbers/styled";

const Dropdown = ({ selected, setMostraConcurso, mostraConcurso }) => {
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
                    {selected &&
                        selected.map((item, index) => {
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
