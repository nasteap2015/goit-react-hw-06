import Contact from '../Contact/Contact';
import { getContacts } from '../../redux/selectors';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

const ContactList = () => {
    const contacts = useSelector(getContacts);

    return (
        <ul className={css.contactList}>
            {contacts.length > 0 ? (
                contacts.map((contact) => (
                    <li className={css.contactListItem} key={contact.id}>
                        <Contact id={contact.id} name={contact.name} number={contact.number} />
                    </li>
                ))
            ) : (
                <li>
                    <p>No contacts</p>
                </li>
            )}
        </ul>
    );
}

export default ContactList;