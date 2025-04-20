import AuthNav from "../AuthModule/AuthNavbar/AuthNav";
import styles from "./Error.module.css";
import Error404 from "/Error.png";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();

    const routeHandler = () => {
        navigate("/login");
    };

    return (
        <>
            <AuthNav />
            <div className={styles.errorContainer}>
                <div className={styles.errorContent}>
                    <img src={Error404} alt="Error" className={styles.error} />
                    <button className={styles.btn} onClick={routeHandler}>
                        Back to Home
                    </button>
                </div>
            </div>
        </>
    );
};
export default Error;
