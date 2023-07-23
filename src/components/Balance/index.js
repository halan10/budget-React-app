import { FormattedMessage } from "react-intl";
import { AppContext } from '../../providers/context';
import { useContext } from "react";
import {Wrapper} from './style'
const Balance = ({balance}) =>{

    const {state} = useContext(AppContext);
    return (<Wrapper>
   <FormattedMessage id = "form.balance"/>: {balance.toFixed(2)}, {state.currency}
    </Wrapper>
    )
}
export default Balance;