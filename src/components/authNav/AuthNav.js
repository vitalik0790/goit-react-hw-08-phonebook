import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
    link: {
        display: 'inline-block',
        textDecoration: 'none',
        padding: 12,
        fontWeight: 700,
        color: '#04CFDD',
    },
    activeLink: {
        color: '#E84A5F',
    },
};

const AuthNav = () => (
    <div>
        <NavLink
            to="/register"
            exact
            style={styles.link}
            activeStyle={styles.activeLink}
        >
            REGISTER
    </NavLink>
        <NavLink
            to="/login"
            exact
            style={styles.link}
            activeStyle={styles.activeLink}
        >
            LOGIN
    </NavLink>
    </div>
);

export default AuthNav;