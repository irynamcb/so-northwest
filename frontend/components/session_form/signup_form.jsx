import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            city: '',

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
        this.props.signup(user);
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        <div className="error">{error}</div>
                    </li>
                ))}
            </ul>
        );
    }

    render() {

        return (
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    <div className="pvl">
                        <h1>Create a new online account</h1>
                        <h2>* Required information</h2>
                    </div>
                    {this.props.errors.length > 0 ?
                        <div className="login-errors">
                            {this.renderErrors()}
                        </div>
                        : ""}
                    <div className="signup-form">
                        <br />
                        <label>First name *
                            <input type="text"
                                value={this.state.firstName}
                                onChange={this.update('firstName')}
                                className="signup-input-1"
                            />
                        </label>
                        <br />

                        <label>Last name *
                            <input type="text"
                                value={this.state.lastName}
                                onChange={this.update('lastName')}
                                className="signup-input-1"
                            />
                        </label>
                        <br />

                        <label>Email address *
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="signup-input-1"
                            />
                        </label>
                        <br />
                        <label>Password *
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="signup-input-1"
                                placeholder="6 - 16 characters"
                            />
                        </label>
                        <br />

                        <label>City
                            <input type="text"
                                value={this.state.city}
                                onChange={this.update('city')}
                                className="signup-input-1"
                            />
                        </label>
                        <br />
                        <input className="signup-submit" type="submit" value="Create account" />
                    </div>
                </form>
            </div>
        );
    }
};

export default SignupForm;