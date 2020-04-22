import React from "react";
import { Route, Link, Switch, HashRouter } from "react-router-dom";
import NavbarContainer from '../components/navbar/navbar_container';
import SignUpFormContainer from '../components/session_form/signup_form_container';

const App = () => (
    <div>
        <header>
            <NavbarContainer />
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/yaRegistration" component={SignUpFormContainer} />
        </Switch>
        <footer>
            {/* Footer component goes here */}
        </footer>
    </div>
);

export default App;