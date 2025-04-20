import React from 'react';
import Banner from '../components/Banner';
import Volunteer from '../components/Volunteer';
import AboutUs from '../components/AboutUs';
import HowItWorks from '../components/HowItWorks';
import FeedBack from '../components/FeedBack';

const Home = () => {
    return (
        <div>
             <section>
             <Banner></Banner>
             </section>
             <section className='container mx-auto px-5 md:px-10'>
                <AboutUs></AboutUs>
             </section>
             <section className='container mx-auto px-5 md:px-10'>
                <HowItWorks></HowItWorks>
             </section>
             <section className='container mx-auto px-5 md:px-10'>
              <Volunteer></Volunteer>
             </section>
             <section className='container mx-auto px-5 md:px-10'>
                <FeedBack></FeedBack>
             </section>

        </div>
    );
};

export default Home;