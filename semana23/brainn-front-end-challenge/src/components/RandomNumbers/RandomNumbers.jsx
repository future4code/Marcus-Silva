import { useState } from "react";
import { Circle } from "./styled";
import { animated, useSpring } from "react-spring";

const RandomNumbers = () => {
    const [random, setRandom] = useState(60);

    const props = useSpring({ val: random, from: { val: 0 } });

    const randomNumber = Math.floor(Math.random() * 60) + 1;

    return (
        <div className="d-flex">
            <Circle>
                <animated.p>
                    {props.val.to((val) => Math.floor(val))}
                </animated.p>
            </Circle>

            <Circle>
                <p>00</p>
            </Circle>

            <Circle>
                <p>00</p>
            </Circle>

            <Circle>
                <p>00</p>
            </Circle>

            <Circle>
                <p>00</p>
            </Circle>

            <Circle>
                <p>00</p>
            </Circle>
        </div>
    );
};

export default RandomNumbers;
