import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bg from '../assets/Snow.svg'
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main
  className="min-h-screen pt-16 bg-cover bg-center"
  style={{ backgroundImage: `url(${bg})` }}
>
            <Outlet></Outlet>
               
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;