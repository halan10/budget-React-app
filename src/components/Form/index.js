import { useState } from "react";
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { FormattedMessage } from "react-intl";

import { Wrapper, BtnSave , Row,StyledTextField} from './style'


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
        });

        props.onCloseFormModal();
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
{/* 
            <FormattedMessage
            id="hello"/> */}
             <StyledTextField>
            <form onSubmit={onSubmit}>


                <Row>
                    <TextField sx={{ mx: 2, my: 2 }}
                        id="date"
                        label={<StyledTextField><FormattedMessage id = "form.date"/></StyledTextField>}
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={onChange}
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                    <TextField sx={{ mx: 2, my: 2 }} name="value" type="number" id="outlined-basic" label={<StyledTextField><FormattedMessage id = "form.sum"/></StyledTextField>} variant="outlined"
                        value={form.value}
                        onChange={onChange} />
                </Row>
                <Row>
                    <TextField sx={{ mx: 2, my: 2 }} name="comment" id="standard-basic" label={<StyledTextField><FormattedMessage id = "form.coments"/></StyledTextField>}
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
                    <BtnSave ><FormattedMessage id="form.btnSave"/></BtnSave>
                </Row>
            </form>
            </StyledTextField>
        </Wrapper>
        
    )
}
Form.propTypes = {
    onChange: PropTypes.func
};
export default Form;