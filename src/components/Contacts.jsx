import PropTypes from 'prop-types';
import styles from './Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, selectContacts } from 'features/contactSlice';
import Contact from './Contact';
import { useEffect } from 'react';
import { fetchContacts } from 'services/api';

export default function Contacts() {
  const dispatch = useDispatch();
  let contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const { token } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchContacts({token}));
  }, []);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name?.toLowerCase().includes(filter)
    );
  };

  contacts = getFilteredContacts();

  return (
    <>
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
    </>
  );
}

// export const Contacts = ({ contacts, onDeleteContact }) => {
//   return (
//     <>
//       <ul className={styles.contact__list}>
//         {contacts.map(({ id, name, number }) => (
//           <li key={id} className={styles.contact__item}>
//             <p className={styles.contact__text}>{name}:</p>
//             <p className={styles.contact__text}>{number}</p>
//             <button
//               onClick={() => onDeleteContact(id)}
//               className={styles.contact__button}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

Contacts.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
