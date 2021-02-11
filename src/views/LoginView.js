import React, { Component } from 'react'

class LoginView extends Component {
    state = {
        email: "",
        password: "",
    }

    render() {
        const { email, password } = this.state;

        const handleChange = (e) => {
            const name = e.tagret;
            this.setState({ [name]: e.target.value })
        }

        return (
            <div>
                <h1>Login page</h1>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label>
                        Password
                         <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </label>

                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginView;