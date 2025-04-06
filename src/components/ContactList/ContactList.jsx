import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.contact_list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact
            id={id}
            name={name}
            number={number}
            onDelete={onDeleteContact}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
