import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';

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

const Navigation = ({ isAuthenticated }) => (
    <nav>
        <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
            HOME
        </NavLink>

        {isAuthenticated && (
            <NavLink
                to="/contacts"
                exact
                style={styles.link}
                activeStyle={styles.activeLink}
            >
                CONTACTS
            </NavLink>
        )}
    </nav>
);

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);