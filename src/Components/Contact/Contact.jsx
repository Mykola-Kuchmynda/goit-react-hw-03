import css from './Contact.module.css'

export default function Contact({ name, number }) {
    return (
    <li className={css.contact}>
      {name}: {number}
    </li>
  );
}
