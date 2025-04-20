import AuthNav from "../../../AuthModule/AuthNavbar/AuthNav";
import Styles from "./NoticeContent.module.css";
const NoticeContent = () => {
    return (
        <>
            <AuthNav />
            <div className={Styles.maincontainer}>
                <div className={Styles.NoticeContainer}>
                    <div className={Styles.NDetails}>
                        <div className={Styles.N_Date}>
                            <span>26/03/2025</span>
                        </div>
                        <div className={Styles.N_Title}>
                            <span>
                                Library Timings Updated New operational hours
                                starting from next month.
                            </span>
                        </div>
                        <div className={Styles.N_Number}>
                            <span>Notice No. 001</span>
                        </div>
                    </div>

                    <div className={Styles.N_Body}>
                        <p>
                            Dear Members,
                            {<br />}
                            {<br />}
                            This is to inform you that the operational hours of
                            Library will be revised starting from 01/04/2025.
                            Please take note of the updated schedule:
                            <br />
                            New Library Timings: {<br />}
                            Monday - Friday: 10:00am - 7:00pm {<br />}
                            Saturday - Sunday: Full Day {<br />}
                            We request all members to plan their visits
                            accordingly. For any queries, please contact the
                            library help desk. {<br />}
                            We appreciate your cooperation. {<br />}
                            Regards,
                            <br />
                            <br />
                            Library
                            <br />
                            JIS College of Engineering, Kalyani
                            <br />
                            26/03/2025
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default NoticeContent;
