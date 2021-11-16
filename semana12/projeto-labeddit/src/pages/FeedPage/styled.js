import styled from "styled-components";

export const FeedPaegContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em;
`;

export const TextField = styled.div`
  margin-bottom: 10px;
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
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.5em;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #000;
`;

export const TextPost = styled.div`
  height: auto;
  padding: 0.3em;
  text-align: center;
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

export const Votes = styled.div`
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

export const UpVote = styled.div`
  cursor: pointer;
`;
export const DownVote = styled.div`
  cursor: pointer;
`;
export const VoteCount = styled.div`
  color: var(--secondaryColor);
`;

export const Comment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const CommentCount = styled.div`
  background-color: #f8f8f8;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
`;
