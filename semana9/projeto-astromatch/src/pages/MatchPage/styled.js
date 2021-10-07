import styled from "styled-components";

export const Profiles = styled.div`
  background-color: rgba(255, 255, 255, 0.15);
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(30px);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 25px;
  width: 400px;
  height: 85px;
`;

export const ImagesProfiles = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50px;
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
