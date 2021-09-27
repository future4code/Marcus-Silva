import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const Paragrafo = styled.p`
  color: #424242;
  font-size: 1rem;
  margin-top: 30px;
`;

const Input = styled.input`
  display: none;
`;

const StarRating = () => {
  const [rating, setRating] = useState(null);

  return (
    <div>
      <Paragrafo>
        Classifique essa sugestão. Seu feedback é importante!
      </Paragrafo>

      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <Input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              size={30}
              cursor="pointer"
              color={ratingValue <= rating ? "#fbd000" : "#c8c8c8"}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
