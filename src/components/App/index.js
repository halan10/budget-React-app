import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Wrapper, GlobalStyle } from './style'
import Home from '../Home'
import About from '../About'
import Statistics from '../Statistics'
import { open } from '../../utils/indexdb'
import Header from "../Header";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }
    }

    // onIncrease() {
    //     this.setState((state) => ({ 
    //         balance: state.balance + 1 , 
    //         transactions: [{label: 'increase', 
    //         value: 1,
    //         id : ++id
    //     }, ...state.transactions]
    //     }))
    // }
    // onDecrease = () => {
    //     this.setState((state) => ({ 
    //         balance: state.balance - 1 , 
    //         transactions: [{label: 'decrease', 
    //         value: -1,
    //         id : ++id
    //     }, ...state.transactions]
    //     }))
    // }

    componentDidMount() {
        open().then(() => {
            this.setState({
                loading: false
            })
        }).catch(() => {
            console.error('Error')
        });

    }
    render() {
        if (this.state.loading) {
            return <div>Loading...</div>
        };
        return (

            <BrowserRouter>
                < Wrapper>  {/* can be replace <></> or React.Fragment */}
                    <GlobalStyle />
                    <Header />
                </Wrapper>
                <Routes>
                    <Route exect path="/" element={<Home />} />
                    <Route path="statistics" element={<Statistics />} />
                    <Route path="about" element={<About />} />
                    <Route path="*" element={<h1>Page Not Found!</h1>} />
                </Routes>
            </BrowserRouter>
        )

    }


}

export default App;