import styled from "styled-components";

// $lora: 'Lora', serif;
// $montserrat:  'Montserrat', sans-serif;

const yellow = "#FEDE87";
const burntOrange = "#FEAE20";
const babyBlue = "#099CD7";
const red = "#D82802";
const gray = "#d5d5d5";
const lightBlue = "#07b7fd";

export const Input = styled.input`
  border: none;
  border-bottom: solid 1px black;
  padding: 0.5em;
  text-align: center;
  color: ${babyBlue};
  ::placeholder {
    color: ${babyBlue};
    font-family: "Montserrat", sans-serif;
    text-align: center;
  }

  :focus {
    outline: 1px solid ${babyBlue};
  }
`;

export const Button = styled.button`
  background-color: ${babyBlue};
  color: white;
  border-radius: 3px;
  padding: 0.5em 1em;
  font-family: "Montserrat", sans-serif;
  transition: 0.25s;
  box-shadow: 3px 3px 6px ${gray};

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
`;

export const Header = styled.header`
  font-family: "Lora", serif;
  font-size: 1.25em;
  text-align: center;
`;

export const SubHeader = styled.header`
  font-family: "Lora", serif;
  font-size: 1em;
  text-align: center;
`;

export const Label = styled.label`
  font-family: "Montserrat", sans-serif;
  font-size: 0.75em;
  padding: 0em 0.5em;
`;

export const Form = styled.form`
  padding: 0.5em;
`;

export const Select = styled.select`
  font-family: "Montserrat", sans-serif;

`;