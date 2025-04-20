import styles from "./AuthNav.module.css";
import Icon from "/AuthIconsvg.svg";
import Text from "/AuthText.svg";
const AuthNav = () => {
    return (
        <nav className={styles.Authnav}>
            <div className={styles.navbar}>
                <img src={Icon} alt="Icon" className={styles.icon} />
                <img src={Text} alt="Logo" className={styles.text} />
            </div>
        </nav>
    );
};
export default AuthNav;
