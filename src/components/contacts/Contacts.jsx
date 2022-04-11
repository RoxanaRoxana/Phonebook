import PropTypes from 'prop-types';
import styles from './Contacts.module.css';
import { useSelector } from 'react-redux';
import { selectFilter, selectContacts } from 'features/contactSlice';
import Contact from './Contact';
// import { useEffect } from 'react';
// import { fetchContacts } from 'services/api';

export default function Contacts() {
  // const dispatch = useDispatch();
  let contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  // const { token } = useSelector((state) => state.users);

  // useEffect(() => {
  //   dispatch(fetchContacts({token}));
  // }, [dispatch, token]);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name?.toLowerCase().includes(filter)
    );
  };

  contacts = getFilteredContacts();

  return (
    <div className={styles.contacts_section}>
      <ul className={styles.contact__list}>
        {contacts.map(item => (
          <Contact
            id={item.id}
            key={item.id}
            name={item.name}
            number={item.number}
          />
        ))}
      </ul>
    </div>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
