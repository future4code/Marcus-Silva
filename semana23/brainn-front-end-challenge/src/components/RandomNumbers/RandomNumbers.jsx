import { Circle, ContainerCircle, Span } from "./styled";

const RandomNumbers = ({ concursoSelecionado }) => {
    return (
        <ContainerCircle>
            {concursoSelecionado.numeros &&
                concursoSelecionado.numeros.map((item, index) => {
                    return (
                        <Circle key={index}>
                            <Span>{item}</Span>
                        </Circle>
                    );
                })}
        </ContainerCircle>
    );
};

export default RandomNumbers;
