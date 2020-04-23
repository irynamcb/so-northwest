import React from "react";
import { Route, Link, Switch, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavbarContainer from '../components/navbar/navbar_container';
import SignUpFormContainer from '../components/session_form/signup_form_container';
import LogInFormContainer  from '../components/session_form/login_form_container';
import About from '../components/about/about';
import Footer from '../components/footer/footer';

const App = () => (
    <div>
        <header>
            <NavbarContainer />
        </header>
        <Switch>
            <Route exact path="/about" component={About} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/yaRegistration" component={SignUpFormContainer} />
        </Switch>
        <footer>
            {/* <Footer /> */}
        </footer>
    </div>
);

export default App;