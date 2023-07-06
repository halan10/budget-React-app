import React from "react";
import Balance from "../Balance";
import Transactions from "../Transactions";
import Form from "../Form";
import ErrorBoundary from '../ErrorBoundary'
import {Wrapper} from './style'
import {getItems, addItem} from '../../utils/indexdb'
class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            balance: 0,
            transactions: []
        }

        this.onChange = this.onChange.bind(this);
        console.log('constructor');
    }

    componentDidMount(){
        getItems().then((transactions) => {
            this.setState({
                transactions
            })
        }).catch((e)=>{
            debugger
        })
    }

    onChange = ({value,date,comment}) =>{
        const transaction ={
            value: +value,
            comment,
            date,
             id: Date.now()
        }
        this.setState((state)=>({
            balance: state.balance + Number(value),
            transactions: [
                transaction,             
                  ...state.transactions]
        }));
        addItem(transaction)
    }

    render() {
        console.log('render')
        return (
            <ErrorBoundary>
            < Wrapper>  {/* can be replace <></> or React.Fragment */}
                <Balance balance={this.state.balance}>Balance</Balance>
                <Form onChange = {this.onChange}/>
                <hr/>
<Transactions transactions ={this.state.transactions}/>
            </Wrapper>
            </ErrorBoundary>
        )
    }

}

export default Home;