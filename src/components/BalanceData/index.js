import  {useState} from "react";
import PropTypes from 'prop-types';
import { useData } from '../../hooks';
export const BalanceData = ({children }) => {
    const { transactions} = useData();
    const sum = transactions.reduce((total, currentValue)=>total = total+currentValue.value,0);
    console.log(sum);
    
    const [balance] = useState(sum);
    return children(sum)
}

BalanceData.propsTypes = {
    children: PropTypes.func.isRequired
}