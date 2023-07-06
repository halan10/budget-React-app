import { Component } from "react";
import PropTypes from 'prop-types';
import {  TextField } from '@mui/material';

import { Wrapper, BtnSave } from './style'


class Form extends Component {

    constructor() {
        super();
        this.state = {
            value: '',
            date: new Date().toISOString().substring(0, 10),
            comment: ''
        }
    }
    z
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onChange(this.state);
        this.setState({
            value: '',
            comment: ''
        })
    }

    onChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: name === 'balence' ? +value : value })
    }
    render() {
        return (
            <Wrapper >
                <form onSubmit={this.onSubmit}>



                      <TextField sx={{ mx: 2, my: 2 }}
                        id="date"
                        label="Date"
                        type="date"
                        name="date"
                        value={this.state.date}
                        onChange={this.onChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    /> 
                    <TextField sx={{ mx: 2, my: 2 }} name="value" type="number" id="outlined-basic" label="Summa" variant="outlined"
                        value={this.state.value}
                        onChange={this.onChange} /> 

                    <TextField sx={{ mx: 2, my: 2 }} name="comment" id="standard-basic" label="Coments"
                        value={this.state.comment}
                        onChange={this.onChange} /> 


                    {/* <Button sx={{ mx: 2, my: 2 }} size="large" variant="contained" color="secondary">
                        Save
                    </Button> */}


                    {/* <input type='date'
                    name='date'
                    value={this.state.date}
                    onChange={this.onChange} />   */}


                    {/* <input name="value"
                    type="number"
                    placeholder="Summ"
                    value={this.state.value}
                    onChange={this.onChange} />  

                     <textarea name='comment'
                    value={this.state.comment}
                    onChange={this.onChange} />   */}
                    <BtnSave>Save</BtnSave>
                </form>
            </Wrapper>
        )
    }
}
Form.propTypes = {
    name: PropTypes.func
};
export default Form;