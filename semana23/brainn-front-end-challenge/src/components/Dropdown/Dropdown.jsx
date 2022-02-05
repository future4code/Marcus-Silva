import { Sidebar } from "./styled";

const Dropdown = ({ selected, setMostraConcurso, mostraConcurso }) => {
    const onChangeValue = (mostraConcurso) => {
        setMostraConcurso(mostraConcurso);
    };

    return (
        <Sidebar>
            <div className="dropdown mb-3">
                <button
                    className="btn dropdown-toggle bg-light "
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

            <div className="mb-3">
                <h2>{mostraConcurso.nome}</h2>
            </div>

            <div>
                <p>Concurso número 000</p>
            </div>
        </Sidebar>
    );
};

export default Dropdown;
