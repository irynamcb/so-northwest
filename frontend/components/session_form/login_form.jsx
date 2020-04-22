import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user);
    }

    signUp() {
        event.preventDefault()
        this.props.history.push("/yaRegistration")
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {

        return (
            <div className="login-form-container">

                <form onSubmit={this.handleSubmit} className="login-form-box">
                    {this.props.errors.length > 0 ?
                        <div className="login-errors">
                            {this.renderErrors()}
                        </div>
                        : ""}
                    <label>
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                            className="login-input"
                        />
                    </label>
                    <label>
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                            className="login-input"
                        />
                    </label>
                    <input className="login-submit" type="submit" value="Sign in" />
                    <br />
                    <input className="create-account" type="submit" value="Create an account" onClick={() => this.signUp()} />
                    <br />
                </form>
            </div>
        );
    }
}

export default LoginForm;