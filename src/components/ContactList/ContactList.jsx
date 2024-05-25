import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
    return (
        <ul className={css.list}>
            {contacts.map(({ name, number, id }) => (
                <li key={id}>
                    <Contact id={id} name={name} number={number} onDelete={onDelete} />
                </li>
            ))}
        </ul>
      
    );
}
// const ContactList = ({ contacts, onDelete }) => (
//     <div>
//         <ul>
//         {contacts.map((contact) => {
//             <li key={contact.id}>
//                 <Contact contact={contact} onDelete={onDelete} />
//             </li>
//         })} </ul>
//         </div>
// )

// export default ContactList
