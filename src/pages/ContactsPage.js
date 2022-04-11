import React from 'react'
import { logoutUser } from 'services/api';
import { useDispatch } from 'react-redux';

const ContactsPage = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Contacts</h2>
      <div>
        <button type='button' onClick={() => dispatch(logoutUser())} name="Sign Out" />
      </div>
    </div>
  );
}

export default ContactsPage;