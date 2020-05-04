import React from "react";
import { useHistory } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useForm } from 'react-hook-form';


function Payment() {

    let history = useHistory();

    const defaultValues = {
        cardName: '',
        cardNumber: '',
        expDate: '',
        cvv: ''

    }

    const { register, handleSubmit, errors, setError, setValue, control, getValues, triggerValidation } = useForm({
        defaultValues: defaultValues
    })

    function handleContinue() {
        event.preventDefault();
        // need to change later
        history.push(`/`)
    }
    return (
        <div className="payment-screen">
            <div className="payment-form">
                <form onSubmit={handleContinue}>
                <React.Fragment>
                    <Typography variant="h6" gutterBottom>
                        Payment method
                </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <TextField 
                            required 
                            id="cardName" 
                            label="Name on card" 
                            helperText="First and last name" 
                            fullWidth 
                            inputRef={register}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField 
                            required 
                            id="cardNumber" 
                            label="Card number" 
                            helperText="16 digits" 
                            fullWidth 
                            inputRef={register}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField 
                            required 
                            id="expDate" 
                            label="Expiration date" 
                            helperText="XX/XX" 
                            fullWidth 
                            inputRef={register}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                required
                                id="cvv"
                                label="CVV"
                                helperText="Last three digits on signature strip"
                                fullWidth
                                inputRef={register}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                                label="Remember credit card details for next time"
                            />
                        </Grid>
                    </Grid>
                </React.Fragment>
                    <h1 className="next">Next, submit your order, you won't be charged yet</h1>
                    <button className="continue" type="submit">Continue</button>
                    </form>
            </div>
        </div>
    )
}

export default Payment;