import React from 'react';
import {shallow} from 'enzyme';
import Transaction from '../Transaction';

describe('Transaction component', ()=>{
    it('should show transaction', () =>{
        const props={
            transaction:{
                
            value: 23,
            comment: 'test',
            date: '01.01.2020'
            }
        }
        const sut = shallow(<Transaction/>);
        expect(sut).toMatchSnapshot();
    })
})