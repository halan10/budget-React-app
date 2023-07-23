import { useState } from "react";
import Balance from "../Balance";
import Transactions from "../Transactions";
import ErrorBoundary from '../ErrorBoundary';
import { ChangeBalance } from "../ChangeBalance";

import { Wrapper } from './style';
import { STATUSES } from "../../constants";
import { useData } from '../../hooks';
//import { BalanceData } from "../BalanceData";
const Home = () => {
    

     const [balance, setBalance] = useState();
    // const [transactionsOld, setTransactions] = useState([]);
    const {transactions, status , pushTransaction,onStarClick,onDelete} = useData();
   
    const sum = transactions.reduce((total, currentValue)=>total = total+currentValue.value,0);
    console.log(sum);

    //   const sum = (transactions.map(datum=>datum.value).reduce((a,b)=>a+b));
    //   console.log(sum);
    // useEffect(() => {
    //     getItems().then((item) => {
    //         setTransactions(item)
    //     }).catch((e) => {
    //         debugger
    //     })

    // }, [setTransactions]);


    const onChange = (transaction) => {
        pushTransaction(transaction);
         setBalance(balance + Number(transaction.value))
    }
 
    return (
        <ErrorBoundary>
            < Wrapper>  {/* can be replace <></> or React.Fragment */}
            {/* <BalanceData>
                {(balance)=><Balance balance={balance} />}
            </BalanceData>  */}
            <Balance balance={sum}/>
                <ChangeBalance onChange={onChange} />
                <hr />

                {status === STATUSES.PENDING ? (<div>Loading...</div>) : null}

                {status === STATUSES.SUCSESS ? (
                    <Transactions transactions={transactions}
                        onDelete={onDelete}
                        onStarClick={onStarClick} />
                ) : null}
          
            </Wrapper>
        </ErrorBoundary>
    )
}

export default Home;