import React, { Component, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './layout/Layout';
import routes from '../routes';
import authOperations from '../redux/auth/authOperations';


import './App.css';
// import PhoneBook from './phoneBook/PhoneBook';


class App extends Component {
    componentDidMount() {
        this.props.onGetCurrentUser();
    }



    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Switch>
                            {routes.map(route => (
                                <Route key={route.path} {...route} />
                            ))}
                        </Switch>
                    </Suspense>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default connect(null, {
    onGetCurrentUser: authOperations.getCurrentUser,
})(App);