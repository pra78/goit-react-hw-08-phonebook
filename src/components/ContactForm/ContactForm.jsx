import { toast } from 'react-hot-toast';
import { ContactFormStyled, InputStyled } from './ContactForm.styled';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';
import { Button, Heading, Text } from '@chakra-ui/react';

const ContactForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector(getContacts);

    const handleChange = event => {
        const { name, value } = event.currentTarget;

        switch (name) {
            case ('name'):
                setName(value);
                break;
            case ('number'):
                setNumber(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (name && number) {
            if (contacts.find(el => el.name === name)) {
                return toast.error(`${name} is already in contacts`);
            }
            dispatch(addContact({ name, number }));
            setName('');
            setNumber('');
        }
    }

    return (
        <ContactFormStyled onSubmit={handleSubmit}>
            <Heading as='h1'>Phonebook</Heading>
            <Text fontSize='xl'>Name</Text>
            <InputStyled
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <Text fontSize='xl'>Phone</Text>
            <InputStyled
                type="tel"
                name="number"
                value={number}
                onChange={handleChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            <Button colorScheme='blue' type="submit">Add contact</Button>
        </ContactFormStyled>
    );
}

export default ContactForm;