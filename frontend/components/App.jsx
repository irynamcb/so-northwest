import React from "react";
import { Route, Link, Switch, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavbarContainer from '../components/navbar/navbar_container';
import SignUpFormContainer from '../components/session_form/signup_form_container';
import LogInFormContainer  from '../components/session_form/login_form_container';
import Products from '../components/products/products';
import Product from '../components/products/product';
import Cart from '../components/cart/cart';
import Modal from './modal/modal';
import Checkout from './checkout/checkout';
import Payment from './checkout/payment';

const App = () => (
    <div>
        <Modal />
        <header>
            <NavbarContainer />
        </header>
        <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/shoppingCart" component={Cart} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/checkout/order-summary" component={Payment} />
            <Route exact path="/products/:productId" component={Product} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/yaRegistration" component={SignUpFormContainer} />
        </Switch>
    </div>
);

export default App;