import { useSelector } from 'react-redux';
import { ContactForm, ContactList, Filter } from 'components';
import { getIsLoading } from 'redux/contacts/selectors';
import { loader } from 'components/Loader/Loader';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function Contacts() {
  const isLoading = useSelector(getIsLoading);

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
