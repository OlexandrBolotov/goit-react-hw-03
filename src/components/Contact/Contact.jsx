import styles from './Contact.module.css';
const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={styles.contact_card}>
      <div>
        <p>👤 {name}</p>
        <p>📞 {number}</p>
      </div>
          <button onClick={() => onDelete(id)} className={styles.contact_btn}>Delete</button>
    </div>
  );
};

export default Contact;
