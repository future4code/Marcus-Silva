import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContainer, MovieTitle } from "./styled";
import { API_KEY, BASE_URL, IMG_URL } from "../../constants/urls";
import Pagination from "../../components/Pagination/Pagination";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        axios
            .get(`${BASE_URL}/movie/popular${API_KEY}&page=${page + 1}`)
            .then((response) => {
                setMovies(response.data.results);
            })
            .catch((error) => {
                console.log(error.message);
                alert("Um erro inesperado aconteceu.");
            });
    }, [page]);

    return (
        <>
            <CardContainer>
                {movies &&
                    movies.map((movie, index) => {
                        return (
                            <Card key={index}>
                                <img
                                    src={IMG_URL + movie.poster_path}
                                    alt={movie.title}
                                />

                                <MovieTitle>{movie.title}</MovieTitle>
                                <p>{movie.release_date}</p>
                            </Card>
                        );
                    })}
            </CardContainer>

            <Pagination setPage={setPage} />
        </>
    );
};

export default Home;
