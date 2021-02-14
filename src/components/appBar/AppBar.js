import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../navigation/Navigation';
import UserMenu from '../userMenu/UserMenu';
import AuthNav from '../authNav/AuthNav';
import { authSelectors } from '../../redux/auth';

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #2A363B',
    },
};

const AppBar = ({ isAuthenticated }) => (
    <header style={styles.header}>
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
);

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);