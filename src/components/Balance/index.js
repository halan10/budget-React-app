import { FormattedMessage } from "react-intl";
const Balance = ({balance}) =>{
    return (<div>
   <FormattedMessage id = "form.balance"/>: {balance}
    </div>
    )
}
export default Balance;