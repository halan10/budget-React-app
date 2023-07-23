import styled from "styled-components";

export const Wrapper  = styled.div`   
background: ${props => props.theme.backgroundMain};
font-size: 22px;
color: ${props => props.theme.linkColor};
font-family: sans-serif; 
`;
Wrapper.displayName = 'WrapperBalance'