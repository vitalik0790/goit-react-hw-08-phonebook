import React, { Component } from 'react'
import { authOperations } from '../redux/auth';
import { connect } from 'react-redux';
import s from './RegisterView.module.css'

const styles = {
    form: {
        width: 320,
    },
};

class RegisterView extends Component {
    state = {
        name: "",
        email: "",
        password: "",
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onRegister({ ...this.state });
        this.setState({ name: '', email: '', password: '' });
    };

    render() {
        const { name, email, password } = this.state;

        return (
            <div className={s.wrapper}>
                <h1>Register page</h1>

                <form className={s.form} onSubmit={this.handleSubmit} style={styles.form}>
                    <label className={s.label}>
                        Name
            <input className={s.name}
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label className={s.label}>
                        Email
            <input className={s.mail}
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label className={s.label}>
                        Password
            <input className={s.password}
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </label>

                    <button className={s.insert} type="submit">Register</button>
                </form>
            </div>
        );
    }
}

export default connect(null, { onRegister: authOperations.register })(
    RegisterView,
);