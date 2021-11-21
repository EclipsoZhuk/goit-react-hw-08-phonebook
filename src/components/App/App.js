import { useSelector } from 'react-redux';
import { phonebookSelector } from '../../redux/phoneBook';
import Container from '../Container';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import s from './App.module.css';

export default function App() {
    const loading = useSelector(phonebookSelector.getLoading);

    return (
        <Container>
            <h1 className={s.title}>Phonebook</h1>
            <ContactForm />
            <h2 className={s.contactTitle}>Contacts</h2>
            <Filter />
            {loading && <h1 className={s.contactTitle}>Loading...</h1>}
            <ContactList />
        </Container>
    );
}
