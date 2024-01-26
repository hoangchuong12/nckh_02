import React, { useState, useEffect } from 'react';
import BrandService from '../../../services/BrandService';
import { Link } from 'react-router-dom';

function BrandList() {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const response = await BrandService.index();
                setBrands(response.brands); // Make sure the response has the correct structure
            } catch (error) {
                console.error('Error fetching brands:', error);
            }
        };
        fetchBrands();
    }, []);

    return (
        <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle ms-0" data-bs-toggle="dropdown" href="#a" role="button" aria-expanded="false">
      brands<svg className="bi" width="18" height="18"><use xlinkHref="#chevron-down"></use></svg>
      </a>
      <ul className="dropdown-menu">
        {brands.map((brand, index) => (
          <li key={index}>
              <Link  className="btn" to={`/productshow/brand/${brand.id}`}>
            <a href={`/${brand.name}.html`} className="dropdown-item fs-5 fw-medium">
              {brand.name} <span className="text-primary"></span>
            </a>
            </Link>
          </li>
        ))}
      </ul>
    </li>
);
}

export default BrandList;