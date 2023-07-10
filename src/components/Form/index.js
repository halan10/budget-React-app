import { useState } from "react";
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

import { Wrapper, BtnSave , Row} from './style'


const Form = (props) => {
    const [form, setForm] = useState({
        value: '',
        date: new Date().toISOString().substring(0, 10),
        comment: ''
    })

    const onSubmit = (e) => {
        e.preventDefault();
        props.onChange(form);
        setForm({
            ...form,
            value: '',
            comment: ''
        })
    }

    const onChange = (e) => {
        const { value, name } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    return (
        <Wrapper >
            <form onSubmit={onSubmit}>


                <Row>
                    <TextField sx={{ mx: 2, my: 2 }}
                        id="date"
                        label="Date"
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={onChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField sx={{ mx: 2, my: 2 }} name="value" type="number" id="outlined-basic" label="Sum" variant="outlined"
                        value={form.value}
                        onChange={onChange} />
                </Row>
                <Row>
                    <TextField sx={{ mx: 2, my: 2 }} name="comment" id="standard-basic" label="Coments"
                        value={form.comment}
                        onChange={onChange} />


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
                </Row>
            </form>
        </Wrapper>
    )
}
Form.propTypes = {
    name: PropTypes.func
};
export default Form;