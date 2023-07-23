import styled from "styled-components";
import { InputLabel} from "@material-ui/core";
export const SettingStyle  = styled.div`   
background: ${props => props.theme.backgroundMain};
    color: ${props => props.theme.linkColor};
   
   h1,p{
    margin: 0px;
   }
`;

export const StyledTextField = styled(InputLabel)`
  && {
     color: ${props => props.theme.color}; 
  }
`;
StyledTextField.displayName = 'StyledTextField';