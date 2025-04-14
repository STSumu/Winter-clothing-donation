import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner';
import { ToastContainer } from 'react-toastify';

const HomeLayout = () => {
    return (
        <div className='winky-rough-font'>
            <ToastContainer></ToastContainer>
            <header>
                <Navbar></Navbar>
            </header>
            <main >
                
               <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;