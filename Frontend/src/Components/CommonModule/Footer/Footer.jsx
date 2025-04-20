import React from "react";
import Styles from "./Footer.module.css";
import copyright from "/copyright_light.png";

const Footer = () => {
    return (
        <footer className={Styles.footer}>
            <div className={Styles.footerText}>
                <img src={copyright} alt="CopyRight" />
                All Copyright Reserved By BookLeash Admin
            </div>
        </footer>
    );
};

export default Footer;
