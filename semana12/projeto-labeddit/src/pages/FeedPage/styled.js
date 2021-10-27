import styled from "styled-components";

export const FeedPaegContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em;
`;

export const WriteYourPost = styled.textarea`
  width: 380px;
  height: 100px;
  border: 1px solid #000;
  font-size: 1.2rem;
  padding: 0.5em;
  resize: none;
  border-radius: 3px;
`;

export const BtnPostBox = styled.div`
  width: 380px;
  margin-bottom: 1.5em;
`;

export const BtnPost = styled.button`
  width: 100%;

  &:hover {
    background-color: var(--secondaryColor);
  }
`;

export const Card = styled.div`
  width: 380px;
  height: auto;
  border: 1px solid #000;
  margin: 1.5em 0;
  border-radius: 3px;
`;

export const User = styled.p`
  text-algin: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5em;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #000;
`;

export const TextPost = styled.div`
  height: auto;
  padding: 0.3em;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #000;
`;

export const Interactions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4em 0.3em;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #000;
`;

export const LikeDislike = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const InputComments = styled.input`
  font-size: 1rem;
  width: 100%;
  padding: 0.3em;
  border: none;
`;
