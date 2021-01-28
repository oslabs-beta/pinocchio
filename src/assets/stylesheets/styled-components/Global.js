import styled from 'styled-components';

// $lora: 'Lora', serif;
// $montserrat:  'Montserrat', sans-serif;

const yellow = '#FEDE87';
const burntOrange = '#FEAE20';
const babyBlue = '#099CD7';
const red = '#D82802';

export const Input = styled.input`
  border: none;
  border-bottom: solid 1px black;
  padding: 1em;

  ::placeholder {
    color: ${babyBlue};
    font-family: "Montserrat", sans-serif;
    text-align: center;
  }
  :focus {
    outline: solid 1px ${red};
    outline-style: auto;
  }
`;

export const Button = styled.button`
  background-color: ${babyBlue};
  color: white;
  border-radius: 3px;
  padding: 0.5em 1em;
  font-family: "Montserrat", sans-serif;
  transition: 0.25s;
  box-shadow: 3px 3px 6px #d5d5d5;

  :hover {
    border: solid 1px ${babyBlue};
    background-color: white;
    color: ${babyBlue};
    transition: 0.25s;
    box-shadow: 3px 3px 10px rgb(7, 183, 253);
  }
`;

export const Title = styled.h1`
  font-family: "Lora", serif;
  font-size: 2em;
  `;
  
  export const SubTitle = styled.h3`
  font-family: "Lora", serif;
  font-size: 1.5em;

`