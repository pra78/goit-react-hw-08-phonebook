import { ContactListStyled, ListItem } from './ContactList.styled';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteContact, fetchContacts } from 'redux/operations';
import { getContacts, getError, getFilter, getIsLoading } from 'redux/selectors';

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);
    const filter = useSelector(getFilter);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));


    return (
        <ContactListStyled>
            {isLoading && !error && <b>Request in progress...</b>}
            {filteredContacts.map(({ name, phone, id }) => (
              <ListItem key={id}>
                  <strong>&#8226;</strong>{name}: {phone}
                  <button
                    type="button"
                    onClick={() => dispatch(deleteContact(id))}
                >Delete</button>
              </ListItem>
              
          ))}
        </ContactListStyled>
    )
}

export default ContactList;