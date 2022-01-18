import React from "react";
import { Card, CardContainer } from "./styled";

const Home = () => {
    return (
        <CardContainer>
            <Card>
                <div>Filme</div>
                <p>Nome do filme</p>
                <p>Data</p>
            </Card>

            <Card>
                <div>Filme</div>
                <p>Nome do filme</p>
                <p>Data</p>
            </Card>

            <Card>
                <div>Filme</div>
                <p>Nome do filme</p>
                <p>Data</p>
            </Card>

            <Card>
                <div>Filme</div>
                <p>Nome do filme</p>
                <p>Data</p>
            </Card>
        </CardContainer>
    );
};

export default Home;
