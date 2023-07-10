import { useState, useEffect } from "react";
import { Button } from '@mui/material';

const Counter = () => {
    const [clicks, setClicks] = useState(0);
    const [step, setStep] = useState(1);

    const showValue = () => {
        setTimeout(() => {
            console.log(clicks);
        }, 3000)
    }
    useEffect(()=>{
        console.log('render: ', clicks, step);
        document.title = `Component rendear. Clicked ${clicks} item`;

        setStep((prevValue) => prevValue+1);
    }, [clicks, step, setStep])
    return (
        <div>
            <div>{clicks}:</div>
            {/* <button onClick={()=> setClicks(clicks+1)}>Click</button> */}
            <Button onClick={() => setClicks(clicks + step)} sx={{ mx: 2, my: 2 }} size="large" variant="contained" color="secondary">
                Click
            </Button>
            <br />
            <Button onClick={() => (showValue)} sx={{ mx: 2, my: 2 }} size="large" variant="contained" color="secondary">
                show Value
            </Button>
            <br />
            <input name="step" value={step} onChange={(e) => setStep(+e.target.value)} />
        </div>
    )
};
export default Counter;
