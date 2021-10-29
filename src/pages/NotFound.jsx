import React from 'react'
import Image from '../assets/img/doguito404.svg';
import '../assets/css/404.css';

const NotFound = () => {
    return ( 
        <main className="container flex flex--center flex--column">
            <img src={Image} alt="" className="doguito-imagem"/>
            <p className="naoencontrado-texto">Ops! Page Not Found!</p>
        </main>
     );
}

export default NotFound