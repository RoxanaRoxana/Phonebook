import { filterContacts } from 'features/contactSlice';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './ContactFilter.module.css';

export default function ContactsFilter({ value }) {
  const dispatch = useDispatch();

  const filterContact = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  return (
    <label className={styles.contactFilter}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={filterContact}
        className={styles.filterInput}
      />
    </label>
  );
}

// export const ContactsFilter = ({ value, onChange }) => {
//     return (

//         <label className={styles.contactFilter}>
//           Find contacts by name
//           <input type="text" value={value} onChange={onChange} className={styles.filterInput} />
//         </label>

//     );
// };

ContactsFilter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
