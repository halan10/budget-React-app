import { memo, useContext } from 'react';
import { AppContext } from '../../providers/context';
import { useBooleanToggle } from '../../hooks';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import { LOCALES } from '../../providers/i18n';
import {saveToStorage} from '../../utils/sessionStorage';
import { SettingStyle } from './style';


const Test = memo(({ data }) => {
    console.log('rendering');
    return (<><div>{JSON.stringify(data)}</div><br /></>)
})

const Setting = () => {
    const { state, dispatch } = useContext(AppContext);
    const { status, handleStatusChange } = useBooleanToggle();
    //  const [isAdvancedSettingShow, setIsAdvancedSettingShow] = useState(false);
    const onChange = (e) => {
        const { value } = e.target;
        dispatch({
            type: 'changeCurrency',
            currency: value
        })
    }

    const onChangeLocale = (e) => {
        const { value } = e.target;
        dispatch({
            type: 'setLocale',
            locale: value
        });
        saveToStorage('locale', value)
    }
    // const data = useMemo(() => [2], []);
    return (
        <>
        <SettingStyle>
                        <h1>Settings</h1>
            <Test 
            // data={data} 
            />
            <Box sx={{ minWidth: 100 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                    <Select
                        value={state.currency}
                        label="Currency"
                        onChange={onChange}
                    >
                        <MenuItem value='UAH'>Гривня</MenuItem>
                        <MenuItem value='USD'>Долар</MenuItem>
                        <MenuItem value='EUR'>Євро</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={{pt: 4 }}>
                    <InputLabel sx={{ pt: 5}} id="demo-simple-select-label">Language</InputLabel>
                    <Select 
                        value={state.locale}
                        label="Language"
                        onChange={onChangeLocale}
                    >
                        <MenuItem value={LOCALES.UKRAINIAN}>Українська</MenuItem>
                        <MenuItem value={LOCALES.ENGLISH}>English</MenuItem>
                    </Select>
                    {/* <label>
                        Currency:
                        <select name='currency'
                            onChange={onChange}
                            value={state.currency}>
                            <option value='UAH'>Гривня</option>
                            <option value='USD'>Долар</option>
                            <option value='EUR'>Євро</option>
                        </select>
                    </label> */}
                </FormControl>
                

                <SettingStyle>  <br />
                    <button onClick={handleStatusChange}>Advanced settings</button>
                    {status ? (
                        <div>

                            <h1>Advanced settings</h1>
                            <p>...</p>
                        </div>

                    ) : null}

                </SettingStyle>
            </Box>
            </SettingStyle>
        </>
    )
};
export default Setting;