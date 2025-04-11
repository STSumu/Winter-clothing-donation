import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner';

const HomeLayout = () => {
    return (
        <div className='winky-rough-font'>
            <header>
                <Navbar></Navbar>
                <Banner></Banner>
            </header>
            <main className='container mx-auto px-5 md:px-10'>
                
               <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;