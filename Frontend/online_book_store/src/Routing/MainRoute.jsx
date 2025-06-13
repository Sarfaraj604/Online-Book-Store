
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import PrivateRoute from './PrivateRoute';
import Home from '../components/HomePage';
import About from '../components/About';
import Shops from '../components/Shops';
import Notification from '../components/Notification';
import Book from '../components/Book';
import CheckoutPage from '../components/CheckoutPage';
import LoginPage from '../components/LoginPage';
import SignupPage from '../components/SignupPage';
import Sellers from '../components/Sellers';
import Team from '../components/Team';

function ConditionalNavbar() {
    const location = useLocation();
    const hideNavbarPaths = ["/signup", "/login", "/checkout"];
    return !hideNavbarPaths.includes(location.pathname) ? <Navbar /> : null;
}

function MainRoute() {
    return (
        <>
            <ScrollToTop />
            <ConditionalNavbar />
            <Routes>
                {/* Public Routes */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />

                {/* Protected Routes */}
                {/* add this in next line" element={<PrivateRoute />}' */}
                <Route >
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/shops" element={<Shops />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/sellers" element={<Sellers />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/notification" element={<Notification />} />
                    <Route path="/book" element={<Book />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default MainRoute;