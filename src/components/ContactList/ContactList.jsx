import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onDelete }) => {
  const wordContacts = contacts.length === 1 ? 'contact' : 'contacts';

  return (
    <div>
      <h2 className={css.contactListTitle}>Contacts</h2>
      <p className={css.totalContacts}>
        You have {contacts.length} {wordContacts}
      </p>
      <ul className={css.contactList}>
        {contacts.map(contact => {
          return (
            <li key={contact.id} className={css.contactItem}>
              <Contact contact={contact} onDelete={onDelete} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
