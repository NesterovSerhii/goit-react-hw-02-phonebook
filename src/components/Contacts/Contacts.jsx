
export const Contacts = ({ contacts, filter, handleChange }) => {
    
  
    return (
        <>
        <input onChange={handleChange}
                type="text"
                value={filter}
              name="filter"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" required
            />
            <ul>
             {contacts.map((contact) => (
                <li key={contact.id}>{contact.name}: {contact.number}</li>
                ))}   
            </ul>
        </>
    )
}
