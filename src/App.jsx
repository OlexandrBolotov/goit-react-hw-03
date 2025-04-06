import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import './App.css';

function App() {
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem('contacts');
    return saved
      ? JSON.parse(saved)
      : [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ];
  });

  const [filter, setFilter] = useState('');
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilterChange = (e) => setFilter(e.target.value);

  const handleAddContact = (newContact) => {
    setContacts(prev => [...prev, { ...newContact, id: nanoid() }]);
  };

  const handleDeleteContact = (id) => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox filter={filter} onFilterChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
}

export default App;
