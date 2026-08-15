import { useState } from 'react';

import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Footer from './Footer';
import LoginModal from './LoginModal';

export default function LandingPage() {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <div className="min-h-screen overflow-x-hidden bg-[#061b1d] text-white">

            <Navbar
                onLogin={() => setShowLogin(true)}
            />

            <Hero
                onGetStarted={() => setShowLogin(true)}
            />

            <Features />

            <Footer />

            {showLogin && (
                <LoginModal
                    onClose={() => setShowLogin(false)}
                />
            )}

        </div>
    );
}