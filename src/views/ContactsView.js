import React, { Component } from 'react';

import { connect } from 'react-redux';
import PhoneBook from '../components/phoneBook/PhoneBook';
import contactsOperations from '../redux/contacts/contactsOperations';


class ContactsView extends Component {
    componentDidMount() {
        this.props.fetchContacts();
    }

    render() {
        return (
            <>
                <PhoneBook />
            </>
        );
    }
}

const mapDispatchToProps = {
    onFetchTasks: contactsOperations.fetchContacts,
};

export default connect(null, mapDispatchToProps)(ContactsView);
