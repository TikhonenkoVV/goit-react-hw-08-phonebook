import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contactsArray;
export const selectContact = state => state.contacts.contact;
export const selectCurrentImg = state => state.contacts.currentImg;
export const selectFilter = state => state.filter;
export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter],
    (contactsArray, filter) => {
        return contactsArray.filter(contact => {
            const fullName = `${contact.name} ${contact.surname}`.trim();
            return fullName.toLowerCase().includes(filter.toLowerCase());
        });
    }
);
