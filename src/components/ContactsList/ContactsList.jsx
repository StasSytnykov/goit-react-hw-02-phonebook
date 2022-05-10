import PropTypes from 'prop-types';
import style from './ContactsList.module.css';

export const ContactsList = ({ contactsArr, deleteContact }) => {
  return (
    <div>
      <ul>
        {contactsArr.length > 0 &&
          contactsArr.map(({ name, number, id }) => {
            return (
              <li className={style.list} key={id}>
                <p>
                  {name}: {number}
                </p>
                <button
                  className={style.button}
                  onClick={() => deleteContact(id)}
                  ype="button"
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

ContactsList.propTypes = {
  contactsArr: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
