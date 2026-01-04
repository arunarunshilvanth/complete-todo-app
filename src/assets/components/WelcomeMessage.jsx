import styles from "./WelcomeMessage.module.css";
import { FaClipboardList, FaArrowUp } from "react-icons/fa";

const WelcomeMessage = () => {
  return (
    <div className={styles.emptyState}>
      <FaClipboardList className={styles.icon} />

      <h5 className={styles.title}>Your todo list is empty</h5>

      <p className={styles.subtitle}>Start by adding your first task above</p>

      <div className={styles.hint}>
        <FaArrowUp className="me-2" />
        Use the input box to stay productive
      </div>
    </div>
  );
};

export default WelcomeMessage;
