import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm, ContactList, Filter } from 'components';
import { fetchContacts } from 'redux/contacts/operations';
import { getIsLoading } from 'redux/contacts/selectors';
import { loader } from 'components/Loader/Loader';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Your contacts</title>
        </Helmet>
        <ContactForm />
        <Filter />
        <div>{isLoading && loader}</div>
        <ContactList />
      </HelmetProvider>
    </>
  );
}
