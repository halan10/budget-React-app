import Transaction from "../Transaction";
import PropTypes from 'prop-types';

const Transactions = ({ transactions = [], onDelete, onStarClick }) => {
    //const sum = (transactions.map(datum=>datum.value).reduce((a,b)=>a+b));
    
    // const sum = transactions.reduce((total, currentValue)=>total = total+currentValue.value,0);
    // console.log(sum);

    return transactions.map((transaction) => {
        return <Transaction key={transaction.id}
            transaction={transaction}
            onDelete={onDelete} 
            onStarClick={onStarClick}
           />
            
    })

}

Transactions.propTypes = {
    transactions: PropTypes.array
}
Transactions.defaultProps = {
    transactions: []
}

export default Transactions;