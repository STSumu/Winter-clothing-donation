import React from 'react';
import Banner from '../components/Banner';
import Volunteer from '../components/Volunteer';

const Home = () => {
    return (
        <div>
             <section>
             <Banner></Banner>
             </section>
             
             <section className='container mx-auto px-5 md:px-10'>
              <Volunteer></Volunteer>
             </section>

        </div>
    );
};

export default Home;