import React, { Component } from 'react'
import { connect } from "react-redux";
import ContactForm from './contactForm/ContactForm'
import ContactList from './contactList/ContactList';
import contactsOperations from '../../redux/contacts/contactsOperations'
import ContactFilter from './contactFilter/ContactFilter';

import { CSSTransition } from "react-transition-group";
import s from './PhoneBook.module.css';




class PhoneBook extends Component {

    componentDidMount() {
        this.props.onFetchContacts();
    }

    render() {
        return (
            <div>
                <CSSTransition
                    in={true}
                    appear={true}
                    timeout={500}
                    classNames={s}
                >
                    <h1 className={s.title}>PHONEBOOK</h1>
                </CSSTransition>

                <ContactForm />
                <ContactFilter />

                <ContactList />
            </div >
        );
    }
}

const mapDispatchToProps = {
    onFetchContacts: contactsOperations.fetchContacts,
}

export default connect(null, mapDispatchToProps)(PhoneBook);
