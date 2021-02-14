import React from 'react';
import { connect } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import s from './UserMenu.module.css'

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    avatar: {
        marginRight: 4,
    },
    name: {
        fontWeight: 700,
        marginRight: 12,
        color: "aqua",
    },
};

const UserMenu = ({ avatar, name, onLogout }) => (
    <div style={styles.container}>
        <img src={avatar} alt="" width="32" style={styles.avatar} />
        <span style={styles.name}>Welcome, {name}</span>
        <button className={s.insert} type="button" onClick={onLogout}>
            Logout
    </button>
    </div>
);

const mapStateToProps = state => ({
    name: authSelectors.getUserName(state),
    avatar:
        'https://i.ibb.co/QKh1Njr/pngkey-com-funny-png-111267.png',
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
    UserMenu,
);