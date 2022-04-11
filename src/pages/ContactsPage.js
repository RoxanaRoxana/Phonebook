import React from 'react'
import { logoutUser } from 'services/api';

const ContactsPage = () => {
  return (
    <div>
      <h2>Contacts</h2>
      <div>
        <Button onClick={() => dispatch(logoutUser())} name="Sign Out" />
      </div>
    </div>
  );
}

export default ContactsPage;