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
                            <img src={logoB} className="image" />
                            <p>Tienda de libros booky</p>
                        </div>
                    </div>
                    <FontAwesomeIcon icon={faTwitter} transform="shrink-6 left-4"  size="2x" color="#00A2F5" />
                    <FontAwesomeIcon icon={faYoutube} transform="shrink-6 left-4" size="2x" color="#FF0000" />
                    <FontAwesomeIcon icon={faFacebookSquare}  transform="shrink-6 left-4" size="2x" color="#377EF0"/>
                    <FontAwesomeIcon icon={faInstagram} transform="shrink-6 left-4" size="2x" color="#DB2F6A"/>
                    <FontAwesomeIcon icon={faPinterestSquare} transform="shrink-6 left-4" size="2x" color="#CB2027"/>

                    <p>&copy; 2020 Proyecto hecho en React <FontAwesomeIcon icon={faReact} transform="shrink-4"  size="2x" color="#00A2F5"/> para el bootcamp de Pioneras&amp;Globant.</p>
 
                </div>
            </footer>
        </div>
    );
}
export default Footer;