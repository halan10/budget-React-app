import styled from "styled-components";

export const Footer  = styled.div`   
background: ${props => props.theme.backgroundMain};
font-size: 26px;
    font-weight: 400;
    color: ${props => props.theme.linkColor};
    width: 100%;

`;
Footer.displayName = 'Footer'