import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'services/api';
import Section from '../section/Section';
import AddForm from '../addForm/AddForm';
import ContactsFilter from '../contactFilter/ContactFilter';
import Contacts from '../contacts/Contacts';



const UserMenu = () => {
      const { token } = useSelector(state => state.users);
      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(fetchContacts(token));
      }, [dispatch, token]);

  return (
    <div>
      <Section title="Phonebook">
        <AddForm />
      </Section>

      <Section title="Contacts">
        <ContactsFilter />
        <Contacts />
      </Section>
    </div>
  );
}

export default UserMenu


