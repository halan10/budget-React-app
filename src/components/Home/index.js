import { useState } from "react";
import Balance from "../Balance";
import Transactions from "../Transactions";
import Form from "../Form";
import ErrorBoundary from '../ErrorBoundary';
import { Wrapper } from './style';
import { STATUSES } from "../../constants";
import { useData } from '../../hooks';

const Home = () => {

    const [balance, setBalance] = useState(0);
    // const [transactionsOld, setTransactions] = useState([]);
    const { transactions, status , pushTransaction,onStarClick,onDelete} = useData();

    // useEffect(() => {
    //     getItems().then((item) => {
    //         setTransactions(item)
    //     }).catch((e) => {
    //         debugger
    //     })

    // }, [setTransactions]);


    const onChange = (transaction) => {
        pushTransaction(transaction)
        setBalance(balance + Number(transaction.value))
    }
 
    return (
        <ErrorBoundary>
            < Wrapper>  {/* can be replace <></> or React.Fragment */}
                <Balance balance={balance} />
                <Form onChange={onChange} />
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