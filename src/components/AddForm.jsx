import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './AddForm.module.css';
import { addContact } from 'services/api';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';

export default function AddForm() {
   const nameInputId = nanoid();
  const numberInputId = nanoid();
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const { contactsList } = contacts;
  const { token } = useSelector(state => state.users);
  const nameInputRef = useRef();
  const numberInputRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const { name } = e.target;
    for (let contact of contactsList) {
      if (contact.name === name.value) {
        alert(`${name.value} is already on the contacts list`);
        return;
      }
    }
    const enteredName = nameInputRef.current.value;
    const enteredNumber = numberInputRef.current.value;

    const userData = {
      name: enteredName,
      number: enteredNumber,
    };

    dispatch(addContact({ token, userData }));
    form.reset();
  };



  return (
    <form className={styles.addForm__editor} onSubmit={handleSubmit}>
      <label className={styles.form__label} htmlFor={nameInputId}>
        Name
        <input
          className={styles.addForm__input}
          type="text"
          name="name"
          id={nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          ref={nameInputRef}
        />
      </label>
      <label className={styles.form__label}>
        Number
        <input
          className={styles.addForm__input}
          id={numberInputId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          ref={numberInputRef}
        />
      </label>
      <button type="submit" className={styles.add__button}>
        Add contact
      </button>
    </form>
  );
}

// export default class AddForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChangeName = e => {
//     this.setState({ name: e.currentTarget.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//       this.props.onSubmit(this.state);

//     this.setState({ name: '', number: '' });
//   };

//   handleChangeNumber = e => {
//     this.setState({ number: e.currentTarget.value });
//   };

//   render() {
//     return (
//       <form className={styles.addForm__editor} onSubmit={this.handleSubmit}>
//         <label className={styles.form__label}>
//           Name
//           <input
//             className={styles.addForm__input}
//             value={this.state.name}
//             onChange={this.handleChangeName}
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </label>
//         <label className={styles.form__label}>
//           Number
//           <input
//             className={styles.addForm__input}
//             value={this.state.number}
//             onChange={this.handleChangeNumber}
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </label>
//         <button type="submit" className={styles.add__button}>
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

AddForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};
