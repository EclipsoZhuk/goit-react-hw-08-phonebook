import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { phonebookSelector, phonebookOperation } from '../../redux/phoneBook';
import s from './ContactForm.module.css';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector(phonebookSelector.getContacts);
    const dispatch = useDispatch();

    const handleChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (
            contacts.find(
                contact => contact.name.toLowerCase() === name.toLowerCase(),
            )
        ) {
            alert(`${name} is already in contacts.`);
        } else if (contacts.find(contact => contact.number === number)) {
            alert(`${number} is already in contacts.`);
        } else if (!name.trim() || !number.trim()) {
            alert("Enter the contact's name and number phone!");
        } else {
            dispatch(phonebookOperation.addContact({ name, number }));
            setName('');
            setNumber('');
        }
    };

    return (
        <div className={s.contactForm}>
            <form type="submit" onSubmit={handleSubmit}>
                <label>
                    Name
                    <input
                        className={s.formInput}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        onChange={handleChange}
                        value={name}
                    />
                </label>
                <label>
                    Number
                    <input
                        className={s.formInput}
                        type="tel"
                        name="number"
                        pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                        title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                        required
                        onChange={handleChange}
                        value={number}
                    />
                </label>

                <button type="submit">Add contact</button>
            </form>
        </div>
    );
}
