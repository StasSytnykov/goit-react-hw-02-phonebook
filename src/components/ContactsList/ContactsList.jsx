import PropTypes from 'prop-types';

export const ContactsList = ({ contactsArr, deleteContact }) => {
  return (
    <div>
      <ul>
        {contactsArr.length > 0 &&
          contactsArr.map(({ name, number, id }) => {
            return (
              <li key={id}>
                {name}: {number}
                <button onClick={() => deleteContact(id)} ype="button">
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
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
