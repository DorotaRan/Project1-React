import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
    <div class="container container-footer text-white">
        <h2> 
        Nazwa firmy - wszelkie prawa zastrzeżone, 2019
        </h2>
        <div class="social-links">
            <a href="https://instagram.com" target="_blank">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="https://pl-pl.facebook.com/" target="_blank">
                <i class="fab fa-facebook-square"></i>
            </a>
        </div>
    </div>
</footer>
  );
}
export default Footer;