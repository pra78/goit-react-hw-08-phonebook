import { ContactFormStyled, InputStyled } from './ContactForm.styled';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';

const ContactForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [phone, setNumber] = useState('');
    const contacts = useSelector(getContacts);

    const handleChange = event => {
        const { name, value } = event.currentTarget;

        switch (name) {
            case ('name'):
                setName(value);
                break;
            case ('phone'):
                setNumber(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (name && phone) {
            if (contacts.find(el => el.name === name)) {
                return alert(`${name} is already in contacts`);
            }
            dispatch(addContact({ name, phone }));
            setName('');
            setNumber('');
        }
    }

    return (
        <ContactFormStyled onSubmit={handleSubmit}>
            <p>Name</p>
            <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <p>Phone</p>
            <InputStyled
                type="tel"
                name="phone"
                value={phone}
                onChange={handleChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            <input type="submit" value="Add contact" />
        </ContactFormStyled>
    );
}

export default ContactForm;