import FormContact from '../FormContact';
import ContactList from '../ContactList';
import Filter from '../Filter';
import Container from '../Container';
import { getFilter } from '../../redux/contacts/contacts-selectors';

export default function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <FormContact />
      <h2>Contacts</h2>
      <Filter value={getFilter} />
      <ContactList />
    </Container>
  );
}
