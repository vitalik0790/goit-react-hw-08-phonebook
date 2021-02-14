import React, { Component } from 'react';
import { authOperations } from '../redux/auth';
import { connect } from 'react-redux';
import s from './LoginView.module.css';

const styles = {
    form: {
        width: 320,
    },
};

class LoginView extends Component {
    state = {
        email: "",
        password: "",
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onLogin({ ...this.state });
        this.setState({ name: '', email: '', password: '' });
    }

    render() {
        const { email, password } = this.state;

        return (
            <div className={s.wrapper}>
                <h1>Login page</h1>

                <form className={s.form} onSubmit={this.handleSubmit} style={styles.form}>
                    <label className={s.label}>
                        Email
                        <input
                            className={s.mail}
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label className={s.label}>
                        Password
                         <input
                            className={s.password}
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </label>

                    <button className={s.insert} type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default connect(null, { onLogin: authOperations.logIn })(LoginView);