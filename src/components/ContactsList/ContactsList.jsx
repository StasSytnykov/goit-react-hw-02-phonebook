export const ContactsList = ({ contactsArr }) => {
  return (
    <div>
      <ul>
        {contactsArr.length > 0 &&
          contactsArr.map(({ name, number, id }) => {
            return (
              <li key={id}>
                {name}: {number}
              </li>
            );
          })}
      </ul>
    </div>
  );
};
