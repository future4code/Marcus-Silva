import { useState } from "react";
import { Circle } from "./styled";

const RandomNumbers = () => {
    const [random, setRandom] = useState([]);

    const handleRandomNumber = () => {
        const arr = [];

        while (arr.length < 6) {
            const randomNumber = Math.floor(Math.random() * 60) + 1;

            if (arr.indexOf(randomNumber) === -1) {
                arr.push(randomNumber);
            }
        }

        setRandom(arr);
    };

    const generate = random.map((num, index) => {
        return (
            <div key={index}>
                <Circle>
                    <p>{num}</p>
                </Circle>
            </div>
        );
    });

    return (
        <div>
            <div>
                <button onClick={handleRandomNumber}>Generate Numbers</button>
            </div>

            <div className="d-flex">{generate}</div>
        </div>
    );
};

export default RandomNumbers;
