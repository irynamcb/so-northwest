import React from "react";
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useForm } from 'react-hook-form';


function Checkout() {

    let history = useHistory();

    const defaultValues = {
        firstName: '',
        lastName: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        country: ''

    }

    const { register, handleSubmit, errors, setError, setValue, control, getValues, triggerValidation } = useForm({
        defaultValues: defaultValues
    })

    function handleContinue(event) {
        event.preventDefault();
        
        if (!triggerValidation()) {
            setError(
                "firstName",
                "Field is required"
            )
        } else {
            history.push(`/checkout/order-summary`)
        }
    }
    
    return (
        <div className="checkout-screen">
            <div className="address-form">
                <form onSubmit={handleContinue}>
                <React.Fragment>
                    <Typography variant="h6" gutterBottom>
                        Shipping address
                </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                inputRef={register}
                                id="firstName"
                                name="firstName"
                                label="First name"
                                fullWidth
                                autoComplete="fname"
                                // minLength={0}
                                error={errors?.firstName?.message}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Last name"
                                fullWidth
                                autoComplete="lname"
                                inputRef={register}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="address1"
                                name="address1"
                                label="Address"
                                fullWidth
                                autoComplete="billing address-line1"
                                inputRef={register}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="city"
                                name="city"
                                label="City"
                                fullWidth
                                autoComplete="billing address-level2"
                                inputRef={register}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="state"
                                name="state"
                                label="State/Province/Region"
                                fullWidth

                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="zip"
                                name="zip"
                                label="Zip / Postal code"
                                fullWidth
                                autoComplete="billing postal-code"
                                inputRef={register}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="country"
                                name="country"
                                label="Country"
                                fullWidth
                                autoComplete="billing country"
                                inputRef={register}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                label="Use this address for payment details"
                            />
                        </Grid>
                    </Grid>
                </React.Fragment> 
                <h1 className="next">Next, review your oder and add payment</h1>
                <button className="continue" type="submit">Continue</button>
                </form>
            </div>
        </div>
    )
}

export default Checkout;