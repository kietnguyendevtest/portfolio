import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Social() {
    return (
        <div className='social'>
            <a href="https://gmail.com" target='_blank' rel="noreferrer" className="social-link icon-mail">
                <FontAwesomeIcon icon="fa-regular fa-envelope" />
            </a>
            <a href="https://linkedin.com" target='_blank' rel="noreferrer" className="social-link icon-linkedin">
                <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
            </a>
            <a href="https://facebook.com" target='_blank' rel="noreferrer" className="social-link icon-facebook">
                <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
            </a>
            <a href="https://instagram.com" target='_blank' rel="noreferrer" className="social-link icon-instagram">
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
            </a>
            <a href="https://youtube.com" target='_blank' rel="noreferrer" className="social-link icon-youtube">
                <FontAwesomeIcon icon="fa-brands fa-youtube" />
            </a>
        </div>
    );
}

export default Social;