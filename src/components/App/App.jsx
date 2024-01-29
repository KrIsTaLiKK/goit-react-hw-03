import { ContactList } from '../ContactList/ContactList';
import { useState, useEffect } from 'react';
import { SearchBox } from '../SearchBox/SearchBox';
import { ContactForm } from '../ContactForm/ContactForm';

import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './App.module.css';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) || defaultContacts
    );
  });

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const [valueFilter, setValueFilter] = useState('');

  const visibleUsers = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(valueFilter.toLowerCase());
  });

  const addContact = (name, number) => {
    const repeatedContact = contacts.some(
      ({ name: userName }) => userName.toLowerCase() === name.toLowerCase()
    );

    if (repeatedContact) {
      return Notify.info(`Contact is already in contacts`, {
        position: 'center-top',
      });
    }

    setContacts(prevContacts => {
      return [
        ...prevContacts,
        {
          id: nanoid(6),
          name,
          number,
        },
      ];
    });
  };

  const onDelete = userId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== userId);
    });
  };

  return (
    <div className={css.firstSection}>
      <h1 className={css.mainTitle}>Phonebook</h1>
      <div className={css.secondSection}>
        <ContactForm addContact={addContact} />
        <div className={css.secondSectionWrap}>
          <SearchBox value={valueFilter} onChangeValue={setValueFilter} />

          <ContactList contacts={visibleUsers} onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
};
