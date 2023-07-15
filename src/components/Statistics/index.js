import React, { useState } from 'react';
import { Wrapper } from './style';


const list = new Array(20).fill(0).map(() => `Item - ${Math.random()}`)

const List = ({ list }) => {
    const [filter, setFilter] = useState('');
    const filteredList = list.filter((item) => item.includes(filter))
    return (<>
        <input type='text' onChange={(e) => setFilter(e.target.value)} />
        <ul>
            {filteredList.map((item) => <li key={item}>{item}</li>)}
        </ul>
    </>
    )
}

const Clicker = ({ children }) => {
    const [n, setN] = useState(0);
    return (
        <div data-count={n}>
            {children}
            <p>Clicked {n} times.</p>
            <button onClick={() => setN(n + 1)}>Click Me</button>
        </div>
    )
}

const Statistics = () => {

    return (
        <Wrapper>
            <h1>Statistics page</h1>
            <p>Statistics</p>
            <Clicker>
                <List list={list}/>
            </Clicker>

        </Wrapper>
    )
};
export default Statistics;