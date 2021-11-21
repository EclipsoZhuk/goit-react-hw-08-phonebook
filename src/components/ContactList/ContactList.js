import s from './ContactList.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { phonebookSelector, phonebookOperation } from '../../redux/phoneBook';

export default function ContactList() {
    const contacts = useSelector(phonebookSelector.getFilterContacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(phonebookOperation.fetchContacts());
    }, [dispatch]);

    return (
        <ul className={s.list}>
            {contacts.map(({ id, name, number }) => (
                <li key={id}>
                    <span className={s.text}>{`${name}: ${number}`}</span>
                    <button
                        className={s.buttonDelete}
                        type="button"
                        onClick={() =>
                            dispatch(phonebookOperation.deleteContact(id))
                        }
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}
