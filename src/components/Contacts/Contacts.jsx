export const Contacts = ({ contactsArr }) => {
  return (
    <div>
      <h2>Contacts</h2>
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
