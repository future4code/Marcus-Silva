import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContainer, MovieTitle } from "./styled";
import { API_KEY, BASE_URL, IMG_URL } from "../../constants/urls";

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios
            .get(`${BASE_URL}/movie/popular${API_KEY}`)
            .then((response) => {
                console.log(response.data);
                setMovies(response.data.results);
            })
            .catch((error) => {
                console.error(error.message);
            });
    }, []);

    return (
        <CardContainer>
            {/* <Card>
                <div>Filme</div>
                <p>Nome do filme</p>
                <p>Data</p>
            </Card> */}

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
    );
};

export default Home;
