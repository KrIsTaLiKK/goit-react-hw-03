import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16733259)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Contact = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <div className={css.contactInfoListWrap}>
      <ul className={css.contactInfoList}>
        <li>
          <FaUser
            className={css.icon}
            style={{ color: `${getRandomHexColor()}` }}
          />
          <span className={css.name}>{name}</span>
        </li>
        <li>
          <FaPhone className={css.icon} />
          <span className={css.name}>{number}</span>
        </li>
      </ul>
      <button onClick={() => onDelete(id)} className={css.deleteBtn}>
        Delete
      </button>
    </div>
  );
};
