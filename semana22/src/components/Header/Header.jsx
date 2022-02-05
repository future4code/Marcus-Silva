import React from "react";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand text-primary">TMDB</a>
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn  btn-primary" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </nav>

            <div className="container py-5">
                <div className="row">
                    <div>
                        <h1 className="text-center">
                            Milhões de filmes, séries e pessoas para descobrir.
                            Explore já.
                        </h1>

                        <h3 className="text-center">
                            Filtre as obras pelos seguintes gêneros
                        </h3>

                        <button className="col m-1 btn btn-info">Ação</button>
                        <button className="col m-1 btn btn-info">
                            Animação
                        </button>
                        <button className="col m-1 btn btn-info">
                            Aventura
                        </button>
                        <button className="col m-1 btn btn-info">
                            Cinema TV
                        </button>
                        <button className="col m-1 btn btn-info">
                            Comédia
                        </button>
                        <button className="col m-1 btn btn-info">Crime</button>
                        <button className="col m-1 btn btn-info">
                            Documentário
                        </button>
                        <button className="col m-1 btn btn-info">Drama</button>
                        <button className="col m-1 btn btn-info">
                            Faroest
                        </button>
                        <button className="col m-1 btn btn-info">
                            Família
                        </button>
                        <button className="col m-1 btn btn-info">
                            Fantasia
                        </button>
                        <button className="col m-1 btn btn-info">
                            Ficção Científica
                        </button>
                        <button className="col m-1 btn btn-info">Guerra</button>
                        <button className="col m-1 btn btn-info">
                            História
                        </button>
                        <button className="col m-1 btn btn-info">
                            Miestério
                        </button>
                        <button className="col m-1 btn btn-info">Música</button>
                        <button className="col m-1 btn btn-info">
                            Romance
                        </button>
                        <button className="col m-1 btn btn-info">Terror</button>
                        <button className="col m-1 btn btn-info">
                            Thriller
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
