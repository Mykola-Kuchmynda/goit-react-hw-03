import Contact from "../Contact/Contact";
import css from './ContactList.module.css'


export default function ContactList({ contacts }) {
    return (
        <ul className={css.contactList}>
            {contacts.map(({ id, name, number }) => (
                <Contact key={id} name={name} number={number} />
            ))}
        </ul>
    );
}