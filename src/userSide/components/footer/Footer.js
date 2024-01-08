import React from 'react'
import "./Footer.css"
import { FaFacebook, FaTwitter, FaYoutube ,FaWhatsapp, FaLinkedin, FaInstagram} from 'react-icons/fa';

function Footer() {
  return (
    <div class="footer-basic">
    <footer>
        <div class="social">     <a href="https://www.instagram.com/anish31_2/"  target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/anish-gehlot/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>

        <a href="https://api.whatsapp.com/send?phone=9179687007" target="_blank">
      <FaWhatsapp/>
       </a>
        </div>
        <ul class="list-inline">
            <li class="list-inline-item"><a href="#">Home</a></li>
            <li class="list-inline-item"><a href="#">Services</a></li>
            <li class="list-inline-item"><a href="#">About</a></li>
            <li class="list-inline-item"><a href="#">Terms</a></li>
            <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
        </ul>
        <p class="copyright">Anish Gehlot  © 2023</p>
    </footer>
</div>
  )
}

export default Footer