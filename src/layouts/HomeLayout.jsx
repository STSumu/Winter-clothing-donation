import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const HomeLayout = () => {
    return (
        <div className='winky-rough-font'>
            <ToastContainer></ToastContainer>
            <header className='min-w-full'>
                <Navbar></Navbar>
            </header>
            <main className='min-h-screen'>
                
               <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;