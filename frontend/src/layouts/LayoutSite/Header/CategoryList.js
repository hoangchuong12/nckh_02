import React, { useState, useEffect } from 'react';
import CategoryService from '../../../services/CategoryService';
import { Link } from 'react-router-dom';

function CategoryList() {
  const [categories, setCategories] = useState([]); 

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await CategoryService.index(); 
        setCategories(response.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);
  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle ms-0" data-bs-toggle="dropdown" href="#a" role="button" aria-expanded="false">
      Category<svg className="bi" width="18" height="18"><use xlinkHref="#chevron-down"></use></svg>
      </a>
      <ul className="dropdown-menu">
        {categories.map((category, index) => (
          <li key={index}>
              <Link  className="btn" to={`/productshow/category/${category.id}`}>
            <a href={`/${category.name}.html`} className="dropdown-item fs-5 fw-medium">
              {category.name} <span className="text-primary"></span>
            </a>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default CategoryList;
