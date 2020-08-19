import React from 'react';
import './style.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';



function TeamCard({ name, title, location, phone, email, img }) {
    return (
        <div className="card-container">
            <div className="card-intro text-color">
                <img src={img} alt={name} />
                <h2>{name}</h2>
                <h3>{title}</h3>
            </div>
            <hr />
            <div className="card-contact">
                <ul>
                    <li><FaMapMarkerAlt /> <a href={`https://www.google.com/maps/place/${location}`}>{location}</a></li>
                    <li><FaPhoneAlt /> <a href={`tel:${phone}`}>{phone}</a></li>
                    <li><FaEnvelope /> <a href={`mailto:${email}`}>{email}</a></li>
                </ul>
            </div>
        </div>
    )
}


export default TeamCard;