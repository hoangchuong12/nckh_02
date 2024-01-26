import '../../layouts/LayoutSite/css/vendor.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../../layouts/LayoutSite/style.css';
import { Helmet } from 'react-helmet';
import bannerImage from '../../layouts/LayoutSite/images/banner-image.jpg';
import ProductCard from './product/ProductCard';
import ProductNew from './product/ProductNew';
import ProductSale from './product/ProductSale';
import ProductHot from './product/ProductHot';
import Faqs from './product/Faqs';
import videoImage from '../../layouts/LayoutSite/images/video-image.jpg';
import Productshow from './../../pages/frontend/product/productshow';
const Home = () => {
    return (
        <>
          <section id="billboard" className="position-relative overflow-hidden">
        {/* Other content */}
        <img src={bannerImage} alt="Vase" className="vase-image" />
      </section>
      <section id="about" className="padding-xlarge">
        <div className="container">
          <div className="row">
            <div className="offset-md-2 col-md-8">
              <span className="title-accent fs-6 text-uppercase">About us</span>
              <h3 className="py-3">Vaso is the only best online store for varieties of collection of clean and beautiful vases.</h3>
              <p>Et id sapien id enim, sit tempor cursus elit, fusce. Nunc tristique facilisis consectetur at vivamus ut porta porta. Ut nisl, tortor, aliquam blandit vitae vehicula vivamus leo nullam urna, scelerisque unc lectus phasellus adipiscing arcu. Tristique facilisis nunc consectetur at tempor cursusut porta.</p>
            </div>
          </div>
        </div>
      </section>
         <ProductNew></ProductNew>

      <section id="our-video">
        <div className="video-section jarallax d-flex align-items-center justify-content-center" style={{ backgroundImage: `url(${videoImage})`, }}>
          <div className="video-player text-center">
            <a type="button" href='#hc' data-bs-toggle="modal" data-src="https://www.youtube.com/embed/W_tIumKa8VY" data-bs-target="#myModal" className="play-btn position-relative">
              <svg className="position-absolute top-0 bottom-0 start-0 end-0 m-auto" width={41} height={41}><use xlinkHref="#play" /></svg>
              <img src={require(`../../layouts/LayoutSite/images/text-pattern.png`)} alt="" className="text-pattern" />
            </a>
          </div>
        </div>
      </section>

      <Faqs></Faqs>
   
      <ProductSale></ProductSale>
      <ProductHot></ProductHot>
        </>
    )
}
export default Home