import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'services/api';
import Section from '../section/Section';
import AddForm from '../addForm/AddForm';
import ContactsFilter from '../contactFilter/ContactFilter';
import Contacts from '../contacts/Contacts';
import styles from './UserMenu.module.css'



const UserMenu = () => {
      const { token } = useSelector(state => state.users);
      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(fetchContacts(token));
      }, [dispatch, token]);

  return (
    <div className={styles.menu}>
      <div className={styles.section}>
        <Section title="Add new contact">
          <AddForm />
        </Section>
      </div>
      <div className={styles.section}>
        <Section title="Your contacts">
          <ContactsFilter />
          <Contacts />
        </Section>
      </div>
    </div>
  );
}

export default UserMenu


