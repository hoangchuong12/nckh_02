
import React from 'react'
import CategoryList from './Header/CategoryList';
import BrandList from './Header/BrandList';
import Search from './Header/Search';

function header() {
  return (
    <>
      <header id="header" className="site-header">
        <nav id="header-nav" className="navbar navbar-expand-lg px-3">
          <div className="container">
            <a className="navbar-brand d-lg-none" href="index.html">

            </a>
            <button className="navbar-toggler d-flex d-lg-none order-3 p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">Menu</button>
            <div className="offcanvas offcanvas-end" tabIndex={-1} id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
              <div className="offcanvas-header px-4 pb-0">
                <a className="navbar-brand" href="index.html">

                </a>
                <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#bdNavbar" />
              </div>
              <div className="offcanvas-body">
                <ul id="navbar" className="navbar-nav w-100 d-flex justify-content-between align-items-center">
                  <ul className="list-unstyled d-lg-flex justify-content-md-between align-items-center">
                    <li className="nav-item">
                      <a className="nav-link ms-0" href="/all products">all products</a>
                    </li>
                    <BrandList></BrandList>
                    <CategoryList></CategoryList>
                  </ul>
                  <a className="navbar-brand d-none d-lg-block me-0" href="/">
                    <img
                      src={require(`./images/logochuong_preview_rev_1.png`)}
                      alt=""
                      className="logo"
                      style={{ width: '100px', height: 'auto' }} 
                    />

                  </a>
                  <ul className="list-unstyled d-lg-flex justify-content-between align-items-center">
                  <Search></Search>
                    <li className="nav-item">
                      <a className="nav-link text-decoration-underline me-0" href="/contact" >contact</a>
                    </li>
                    <li className="cart-dropdown nav-item dropdown">
                      <a className="nav-link dropdown-toggle me-0"  href="/cart" >Cart</a>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>

    </>
  )
}

export default header
