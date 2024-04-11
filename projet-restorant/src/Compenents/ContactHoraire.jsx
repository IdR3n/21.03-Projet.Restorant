import React from "react";
import "../Compenents/Compenents.css";

const Choraire = () => {
    return(
        <div className="footer-container">
            {/* Arka plan resmi için ayrı bir div */}
            <div className="background-image"></div>
            {/* İçerik */}
            <div className="footer-content">
                <div className="footer-contact">
                    <h2>Contact</h2>
                    <p> +41 22 000 00 00 </p>
                    <p>Chef's Restaurant</p>
                    <p>Avenue du Projet 11, 1000 Genève</p>
                </div>
                <div className="footer-hours">
                    <h2>Horaire</h2>
                    <p>Lundi-Vendredi: 8h30-23h30</p>
                    <p>Samedi: 10h30-21h30</p>
                    <p>Dimanche: Fermé</p>
                </div>
            </div>
        </div>
    );
}
export default Choraire;
