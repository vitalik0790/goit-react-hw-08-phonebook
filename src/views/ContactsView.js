import React, { Component } from 'react';
import PhoneBook from '../components/phoneBook/PhoneBook'
// import { connect } from 'react-redux';
// import contactsOperations from '../redux/contacts/contactsOperations';


class ContactsView extends Component {
    // componentDidMount() {
    //     this.props.fetchContacts();
    // }

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
