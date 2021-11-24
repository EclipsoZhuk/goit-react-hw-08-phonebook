import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

export default function ContactsView() {
    return (
        <>
            <ContactForm />
            <Filter />
            <ContactList />
        </>
    );
}
