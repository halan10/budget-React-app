import styled from "styled-components";

export const Wrapper = styled.div`   
/* background: linear-gradient(90deg, rgba(243,243,243,1)0%, rgba(151,186,229,1)100%); */
background: ${props => props.theme.backgroundMain};
    color: ${props => props.theme.linkColor};
padding: 5px;

`;
