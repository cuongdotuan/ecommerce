import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import { NavLink } from 'react-router-dom'
const Root = () => {
    return (
        <>
            <div className=' w-full opacity-100 mb-4'> 
                <Header />
                <Navigation />
            </div>
            <Outlet />

            <Footer />
        </>
    )
}

export default Root