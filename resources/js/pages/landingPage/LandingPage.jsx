import { useState } from 'react';

import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Footer from './Footer';
import LoginModal from './LoginModal';

export default function LandingPage({ user = null }) {

    const [showLogin, setShowLogin] = useState(false);


    /*
    |--------------------------------------------------------------------------
    | Sign In
    |--------------------------------------------------------------------------
    */

    const handleLogin = () => {

        // Already logged in
        if (user) {

            window.location.href = '/dashboard';

            return;
        }


        // Not logged in
        setShowLogin(true);
    };


    /*
    |--------------------------------------------------------------------------
    | Get Started
    |--------------------------------------------------------------------------
    */

    const handleGetStarted = () => {

        // Already logged in
        if (user) {

            window.location.href = '/dashboard';

            return;
        }


        // Not logged in
        setShowLogin(true);
    };


    return (

        <div className="min-h-screen overflow-x-hidden bg-[#061b1d] text-white">

            {/* =========================================================
                NAVBAR
            ========================================================= */}

            <Navbar
                onLogin={handleLogin}
            />


            {/* =========================================================
                HERO
            ========================================================= */}

            <Hero
                onGetStarted={handleGetStarted}
            />


            {/* =========================================================
                FEATURES
            ========================================================= */}

            <Features />


            {/* =========================================================
                FOOTER
            ========================================================= */}

            <Footer />


            {/* =========================================================
                LOGIN MODAL
            ========================================================= */}

            {showLogin && (

                <LoginModal
                    onClose={() => setShowLogin(false)}
                />

            )}

        </div>

    );
}