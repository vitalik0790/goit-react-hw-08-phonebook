import React, { Component } from 'react';
import PhoneBook from '../components/phoneBook/PhoneBook'

class ContactsView extends Component {

    render() {
        return (
            <>
                <PhoneBook />
            </>
        );
    }
}

// const mapDispatchToProps = {
//     onFetchTasks: contactsOperations.fetchContacts,
// };

export default ContactsView;
