import { InputLabel} from "@material-ui/core";
import styled from "styled-components";

export const Wrapper = styled.div`   
color: ${props => props.theme.color};
display: flex;
justify-content: center;
margin: 10px;
padding: 5px;

`;
export const Row = styled.div`
    display: flex;
  flex-direction: column;
`
Row.displayName = 'Row'

export const BtnSave = styled.button`   
background-color:rgb(25, 118, 210);
color:#000;
font-size: 20px;
padding: 10px 50px;
border-radius: 5px;
margin: 20px 16.5px 16.5px 16.5px;
width: auto;
cursor: pointer;
&:disabled {
  color: grey;
  opacity: 0.7;
  cursor: default;
}

&:hover{
transition: all 0.2s ease-in-out;
background:#6a99df ;
color: #010606;
}


`;

BtnSave.displayName = 'BtnSave';

export const StyledTextField = styled(InputLabel)`
  && {
    /* color: ${props => props.theme.color}; */
    color: black;
  }
`;
StyledTextField.displayName = 'StyledTextField';