import { FormattedMessage } from "react-intl";
import { AppContext } from '../../providers/context';
import { useContext } from "react";
const Balance = ({balance}) =>{

    const {state} = useContext(AppContext);
    return (<div>
   <FormattedMessage id = "form.balance"/>: {balance.toFixed(2)}, {state.currency}
    </div>
    )
}
export default Balance;