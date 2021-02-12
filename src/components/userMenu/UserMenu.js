import React from 'react';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';
import authSelectors from '../../redux/auth/authSelectors';
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
    },
};

const UserMenu = ({ avatar, name, onLogout }) => (
    <div style={styles.container}>
        <img src={avatar} alt="" width="32" style={styles.avatar} />
        <span style={styles.name}>Welcome, {name}</span>
        <button type="button" onClick={onLogout}>
            Logout
    </button>
    </div>
);

const mapStateToProps = state => ({
    name: authSelectors.getUserName(state),
    avatar:
        'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-7.jpg',
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
    UserMenu,
);