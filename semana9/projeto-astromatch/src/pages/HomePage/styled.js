import styled from "styled-components";

export const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.15);
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(30px);
  border-radius: 6px;
  margin-bottom: 45px;
  padding: 35px;
  width: 400px;
  height: 500px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const ImgProfile = styled.img`
  max-width: 100%;
  height: 300px;
  text-align: center;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  font-weight: bold;
  outline: 0;
  padding: 1em 1.6em;
  text-transform: uppercase;

  background-color: #c06bae;
  border-radius: 6px;
  color: #fff;
  overflow: hidden;
  position: relative;

  &:hover {
    background-color: #c06bae;
  }

  &:before {
    background-color: rgba(255, 255, 255, 0.1);
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    transform: translateX(-100%) rotate(-45deg);
    transition: all 0.4s ease-in 50ms;
  }

  &:hover:before {
    transform: translateX(100%) rotate(-45deg);
    transition: all 0.4s ease-out 50ms;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;

export const BtnIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  margin-top: 5px;
`;

export const ButtonIcon = styled.button`
  background-color: transparent;
  border: 2px solid #c06bae;
  border-radius: 50px;
  color: #c06bae;
  font-weight: 700;
  width: 30px;
  height: 30px;
`;
