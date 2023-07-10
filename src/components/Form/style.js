import styled from "styled-components";

export const Wrapper = styled.div`   
display: flex;
justify-content: center;
margin: 10px;
padding: 5px;

`;
export const Row = styled.div`
    display: flex;
    align-items: center;
`
Row.displayName = 'Row'

export const BtnSave = styled.button`   
background-color:#0D47A1;
color:#000;
font-size: 20px;
padding: 10px 55px;
border-radius: 5px;
margin: 20px 0 16.5px 16.5px;
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