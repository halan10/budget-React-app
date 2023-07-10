import PropTypes from 'prop-types';
import { useCallback, useContext } from 'react';
import { AppContext } from '../../providers/context';
import { Wrapper, TransactionDate, Value, Comment ,Icon } from './style';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Star from '../images/star-empty-icon.svg'
import StarFilled from '../images/star-symbol-icon.svg'


const Transaction = ({ transaction: { id, value, date, comment,isStarred },onDelete,onStarClick }) => {
    const {state} = useContext(AppContext);

    const deleteItem = useCallback(() => onDelete(id),[id]);

    return (
        <Wrapper value={value}>
            <Icon onClick={()=>onStarClick(id)}><img src = {isStarred ? StarFilled : Star} style={{ height: 20, width: 20 }} alt='star'/></Icon>
            <TransactionDate>{date}</TransactionDate>
            <Value>{value.toFixed(2)}, {state.currency}</Value>
            <Comment>{comment}</Comment>
            <DeleteForeverIcon  onClick={deleteItem}/>
        </Wrapper>
    );
}


Transaction.propTypes = {
    transaction: PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.number
    }),
    onStarClick: PropTypes.func,
    onDelete: PropTypes.func
}
Transaction.defaultProps = {
    transaction: {
        label: '',
        value: 0
    }
}

export default Transaction