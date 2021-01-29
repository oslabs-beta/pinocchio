import styled from "styled-components";

// $lora: 'Lora', serif;
// $montserrat:  'Montserrat', sans-serif;

const yellow = "#FEDE87";
const burntOrange = "#FEAE20";
const babyBlue = "#099CD7";
const red = "#D82802";
const gray = "#d5d5d5";
const lightBlue = "#07b7fd";


export const ItButton = styled.button`
  background-color: ${burntOrange};
  color: white;
  border-radius: 3px;
  padding: 0.5em 1em;
  font-family: "Montserrat", sans-serif;
  transition: 0.25s;
  box-shadow: 3px 3px 6px ${gray};

  :hover {
    border: solid 1px ${burntOrange};
    background-color: white;
    color: ${burntOrange};
    transition: 0.25s;
    box-shadow: 3px 3px 10px ${burntOrange};
  }
`;

export const PAButton = styled.button`
  background-color: ${red};
  color: white;
  border-radius: 3px;
  padding: 0.5em 1em;
  font-family: "Montserrat", sans-serif;
  transition: 0.25s;
  box-shadow: 3px 3px 6px ${gray};

  :hover {
    border: solid 1px ${red};
    background-color: white;
    color: ${red};
    transition: 0.25s;
    box-shadow: 3px 3px 10px ${red};
  }
`;