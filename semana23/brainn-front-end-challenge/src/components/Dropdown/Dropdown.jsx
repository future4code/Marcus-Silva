const Dropdown = () => {
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
                    <li>
                        <a className="dropdown-item" href="#">
                            Mega-sena
                        </a>
                    </li>

                    <li>
                        <a className="dropdown-item" href="#">
                            Quina
                        </a>
                    </li>

                    <li>
                        <a className="dropdown-item" href="#">
                            Lotofácil
                        </a>
                    </li>

                    <li>
                        <a className="dropdown-item" href="#">
                            Lotomania
                        </a>
                    </li>

                    <li>
                        <a className="dropdown-item" href="#">
                            Timemania
                        </a>
                    </li>

                    <li>
                        <a className="dropdown-item" href="#">
                            Dia de sorte
                        </a>
                    </li>
                </ul>
            </div>

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
