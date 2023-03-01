import PhoneBook from './contactsForm/contactsForm';
import Comtacts from './contactsList/contactsList';
import Filter from './сontactsFilter/contactsFilter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'Redux/operations';
import { Loader } from './loader/loader';
import { selectIsLoading } from 'Redux/selector';
import { selectError } from 'Redux/selector';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h1>Phone book</h1>

      <PhoneBook/>

      <h2>Contacts</h2>

      <Filter />
      {isLoading && !error && <Loader />}
      <Comtacts/>
    </>
  );
};
