
import React from 'react';
import AppBar from '../appBar/AppBar';

const styles = {
    container: {
        width: '80vw',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '0 24px 34px',
    },
};

const Layout = ({ children }) => (
    <div style={styles.container}>
        <AppBar />
        {children}
    </div>
);

export default Layout;