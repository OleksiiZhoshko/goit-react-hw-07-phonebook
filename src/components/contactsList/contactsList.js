import React from 'react';
import css from './contactsList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'Redux/selector';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/operations';

const Contacts = () => {
    const contacts = useSelector(selectFilteredContacts)
    const dispatch = useDispatch();
    return (
      <ul className={css.box}>
        {contacts.map(({ id, name, number }) => (
          <li className={css.list} key={id}>
            <p>{name}:</p>
            <p>{number}</p>
            <button
              className={css.button}
              type="button"
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
};

export default Contacts;