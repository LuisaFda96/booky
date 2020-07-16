import React from 'react';
import logoB from '../../components/img/logoB.png';
import "../../styles/footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube, faInstagram,  faFacebookSquare, faPinterestSquare, faReact } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div>
            <footer className="footer is-primary">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <img src={logoB} className="image" alt="logo" />
                            <p>
Booky book store</p>
                        </div>
                    </div>
                    <FontAwesomeIcon icon={faTwitter} transform="shrink-6 left-4"  size="2x" color="#00A2F5" />
                    <FontAwesomeIcon icon={faYoutube} transform="shrink-6 left-4" size="2x" color="#FF0000" />
                    <FontAwesomeIcon icon={faFacebookSquare}  transform="shrink-6 left-4" size="2x" color="#377EF0"/>
                    <FontAwesomeIcon icon={faInstagram} transform="shrink-6 left-4" size="2x" color="#DB2F6A"/>
                    <FontAwesomeIcon icon={faPinterestSquare} transform="shrink-6 left-4" size="2x" color="#CB2027"/>

                    <p className="copyright">&copy; 2020 Project done in React <FontAwesomeIcon icon={faReact} transform="shrink-1"  size="2x" color="#00A2F5"/> 
for the Pioneer bootcamp&amp;Globant.</p>
 
                </div>
            </footer>
        </div>
    );
}
export default Footer;