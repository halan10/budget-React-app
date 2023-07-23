import Transaction from "../Transaction";
import PropTypes from 'prop-types';
import emptygif from "../images/emptylist.gif";
const Transactions = ({ transactions = [], onDelete, onStarClick }) => {
    //const sum = (transactions.map(datum=>datum.value).reduce((a,b)=>a+b));
    
    // const sum = transactions.reduce((total, currentValue)=>total = total+currentValue.value,0);
    // console.log(sum);

    if (transactions.length ===0){
        return  <div style={{  textAlign: 'center'}}>  
<p>Your transaction list is empty</p>
<img src={emptygif} style={{ height: '100%' , width: '100%'}} alt="emptygif" />
        </div>
    }
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