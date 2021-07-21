import React from "react";
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location = mailto;
                e.preventDefault();
            }}
            className="contact-links"
        >
            <i class="fas fa-envelope-square"/>&nbsp;Email
        </Link>
    );
};

export default ButtonMailto;