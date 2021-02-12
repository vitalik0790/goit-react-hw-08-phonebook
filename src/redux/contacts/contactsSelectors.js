import { createSelector } from '@reduxjs/toolkit'

const getContacts = state => state.contacts.contactList;
const getFilterValue = state => state.contacts.filter;

const getVisibleContacts = createSelector([getContacts, getFilterValue], (contactList, filter) => {
    return contactList.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()))
});


export default {
    getContacts,
    getFilterValue,
    getVisibleContacts,
};





