import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-navy  text-center text-lg-start mt-5">
      <div className="container p-4">
        <div className="row">
          {/* Sekcja Adresu */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Adres/Address</h5>
            <p>
              UI/UX Conference Center<br />
              ul. Przykładowa 123<br />
              00-000 Warszawa, Polska
            </p>
          </div>

          
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Data: 25-26/11/2026</h5>
            <p>Piątek/Friday: 8:30 - 17:15</p>
            <p>Sobota/Saturday: 9:00 - 17:15</p>
            <p>TECHVILL</p>
          </div>

          
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Social Media</h5>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: '#3b5998' }}
            >
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-danger btn-floating m-1"
              style={{ backgroundColor: '#E4405F' }}
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-danger btn-floating m-1"
              style={{ backgroundColor: '#FF0000' }}
            >
              <i className="fab fa-youtube"></i> YouTube
            </a>
          </div>
        </div>
      </div>

      {/* Stopka */}
      <div className="text-center p-3 bg-dark text-light">
        © 2025 UI/UX Conference | Wszystkie prawa zastrzeżone.
      </div>
    </footer>
  );
};

export default Footer;
