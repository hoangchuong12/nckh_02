import React from 'react';

function Footer() {
  return (
    <footer id="footer" className="overflow-hidden padding-xlarge pb-0">
      <div className="container">
        <div className="row">
          <div className="footer-top-area pb-5">
            <div className="row d-flex flex-wrap justify-content-between">
              <div className="col-lg-3 col-sm-6 pb-3">
                <div className="footer-menu">
                  <img
                    src={require(`./images/logochuong_preview_rev_1.png`)}
                    alt=""
                    className="logo"
                    style={{ width: '100px', height: 'auto' }}
                  />
                  <p>Nunc tristique facilisis consectetur vivamus ut porta porta aliquam vitae vehicula leo nullam urna lectus.</p>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6 pb-3">
                <div className="footer-menu">
                  <h4 className="widget-title pb-2">Quick Links</h4>
                  <ul className="menu-list list-unstyled">
                    <li className="menu-item pb-2">
                      <a href="about.html">About</a>
                    </li>
                    <li className="menu-item pb-2">
                      <a href="shop.html">Shop</a>
                    </li>
                    <li className="menu-item pb-2">
                      <a href="contact.html">Contact</a>
                    </li>
                    <li className="menu-item pb-2">
                      <a href="login.html">Account</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 pb-3">
                <div className="footer-menu contact-item">
                  <h4 className="widget-title pb-2">Contact info</h4>
                  <ul className="menu-list list-unstyled">
                    <li className="menu-item pb-2">
                      <a href="#a">Tea Berry, Marinette, USA</a>
                    </li>
                    <li className="menu-item pb-2">
                      <a href="#a">+55 111 222 333 44</a>
                    </li>
                    <li className="menu-item pb-2">
                      <a href="mailto:">yourinfo@gmail.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 pb-3">
             <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dYOUR_LATITUDE_AND_LONGITUDE!2d-74.005941!3d40.7127766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDE0JzAyLjYiTiA3NMKwMDUnMzQuMyJX!5e0!3m2!1sen!2sus!4vYOUR_GOOGLE_MAPS_API_KEY"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
              </div>
            </div>
          </div>
        </div>
        
        <hr />
      </div>
    </footer>
  );
}

export default Footer;
