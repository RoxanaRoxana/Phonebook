import styles from './Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'services/api';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.users);
  
  return (
    <li key={id} className={styles.contact__item}>
      <p className={styles.contact__text}>{name}:</p>
      <p className={styles.contact__text}>{number}</p>
      <button
        onClick={()=> dispatch(deleteContact({token, id}))}
        className={styles.contact__button}
      >
        Delete
      </button>
    </li>
  );
}
