
import React, { useState, createContext, useContext,useEffect } from 'react';
import './css/vendor.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './style.css';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import UserService from '../../services/UserService';


const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

const LayoutSite = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = async (username, password) => {
        try {
            const response = await UserService.login({ username, password });
            if (response.status) {
                console.log(response.user);
                localStorage.setItem('user', JSON.stringify(response.user));
                setUser(response.user);
     
            } else {
              console.log("login khong thanh c");
            }
        } catch (error) {
            console.error('Login error:', error);
   
        }
    };

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
    };


  return (
    <UserContext.Provider value={{ user, login, logout }}>
    <>
      <Helmet>
        <title>Vaso Ecommerce Template</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="author" content="" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Italiana&family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap" rel="stylesheet" />

      </Helmet>
      <svg xmlns="http://www.w3.org/2000/svg" >
        <symbol xmlns="http://www.w3.org/2000/svg" id="angle-right" viewBox="0 0 32 32">
          <path fill="currentColor" d="M12.969 4.281L11.53 5.72L21.812 16l-10.28 10.281l1.437 1.438l11-11l.687-.719l-.687-.719z" />
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" id="angle-left" viewBox="0 0 32 32">
          <path fill="currentColor" d="m19.031 4.281l-11 11l-.687.719l.687.719l11 11l1.438-1.438L10.187 16L20.47 5.719z" />
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" id="chevron-down" viewBox="0 0 24 24">
          <path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z" />
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" id="arrow-right" viewBox="0 0 32 32">
          <path fill="currentColor" d="M18.719 6.781L17.28 8.22L24.063 15H4v2h20.063l-6.782 6.781l1.438 1.438l8.5-8.5l.687-.719l-.687-.719z" />
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" id="arrow-left" viewBox="0 0 32 32">
          <path fill="currentColor" d="m13.281 6.781l-8.5 8.5l-.687.719l.687.719l8.5 8.5l1.438-1.438L7.938 17H28v-2H7.937l6.782-6.781z" />
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" id="play" viewBox="0 0 24 24">
          <path fill="currentColor" d="M8 5.14v14l11-7l-11-7Z" />
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" id="facebook" viewBox="0 0 24 24">
          <path fill="currentColor" d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" id="youtube" viewBox="0 0 32 32">
          <path fill="currentColor" d="M29.41 9.26a3.5 3.5 0 0 0-2.47-2.47C24.76 6.2 16 6.2 16 6.2s-8.76 0-10.94.59a3.5 3.5 0 0 0-2.47 2.47A36.13 36.13 0 0 0 2 16a36.13 36.13 0 0 0 .59 6.74a3.5 3.5 0 0 0 2.47 2.47c2.18.59 10.94.59 10.94.59s8.76 0 10.94-.59a3.5 3.5 0 0 0 2.47-2.47A36.13 36.13 0 0 0 30 16a36.13 36.13 0 0 0-.59-6.74ZM13.2 20.2v-8.4l7.27 4.2Z" />
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" id="twitter" viewBox="0 0 256 256">
          <path fill="currentColor" d="m245.66 77.66l-29.9 29.9C209.72 177.58 150.67 232 80 232c-14.52 0-26.49-2.3-35.58-6.84c-7.33-3.67-10.33-7.6-11.08-8.72a8 8 0 0 1 3.85-11.93c.26-.1 24.24-9.31 39.47-26.84a110.93 110.93 0 0 1-21.88-24.2c-12.4-18.41-26.28-50.39-22-98.18a8 8 0 0 1 13.65-4.92c.35.35 33.28 33.1 73.54 43.72V88a47.87 47.87 0 0 1 14.36-34.3A46.87 46.87 0 0 1 168.1 40a48.66 48.66 0 0 1 41.47 24H240a8 8 0 0 1 5.66 13.66Z" />
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" id="instagram" viewBox="0 0 256 256">
          <path fill="currentColor" d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32Zm48-136H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56Zm40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40ZM192 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z" />
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" id="linkedin" viewBox="0 0 24 24">
          <path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
        </symbol>
      </svg>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </>
    </UserContext.Provider>
  );

};
export default LayoutSite;
