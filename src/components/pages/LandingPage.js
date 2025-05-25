import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/landing-page.css';

import bglogo from "../../assets/logos/barifflelogotrim.jpeg";
import image1 from "../../assets/images/BRIDGETOWN_barbados-g9afed3245_1920_wide.jpg";
import image2 from "../../assets/images/bathsheba.jpg"


export default function LandingPage () {
    // init navigate variable for page navigation
    const navigate = useNavigate();

    // routing functions
    const navigateInfo = () => navigate('/info', { replace: false });
    const navigateLandingPage = () => navigate('/', { replace: false });

    // state variables 
    const [isScrolled, setIsScrolled] = useState(false);

    // function to monitor if a user has scrolled to trigger the alternate nav-bar styles
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div className="lp-wrapper">
            <div className={`lp-nav-wrapper ${isScrolled ? 'lp-scrolled' : ''}`}>
                <button className="lp-nav-left" onClick={navigateLandingPage}>
                    <img src={bglogo} alt="logo" className="lp-nav-logo" />
                </button>
                <div className="lp-nav-right">
                    <button className="lp-nav-btn" onClick={navigateLandingPage} >About Us</button>
                    <button className="lp-nav-btn" onClick={navigateInfo}>What We Do</button>
                    <button className="lp-nav-btn" >Contact Us</button>
                </div>
            </div>
            <div className="lp-block1">
                <h1 className="lp-block1-title">Bariffle Group</h1>
                <h2 className="lp-block1-subtitle">The Heart of Caribbean Distribution</h2>
                <button className="lp-cta" onClick={navigateInfo}>Learn More</button>
            </div>
            <div className="lp-img-block">
                <div className="lp-img-block-content-wrapper">
                    <p className="lp-text-blue">
                        At Bariffle Group, we understand that the Caribbean deserves quality. So, we have made it 
                        our business to empower regional retailers, grocers, and wholesalers by giving them access 
                        to exceptional brands - from food and beverage to household staples - and seamless distribution.
                    </p>
                </div>
                <div className="lp-img-wrapper">
                    <img src={image1} alt="Barbados" className="lp-img" />
                </div>
            </div>
            <div className="lp-img-block lp-reverse-display">
                <div className="lp-img-block-content-wrapper">
                    <p className="lp-text-blue right-align">
                        Headquartered in Barbados, our vision is to be an unmatched, long-lasting bridge between Caribbean markets 
                        and producers of high-quality goods across Latin America stamped by our signature efficiency, reliability, 
                        and care.
                    </p>
                </div>
                <div className="lp-img-wrapper">
                    <img src={image2} alt="Barbados" className="lp-img" />
                </div>
            </div>
            <div className="footer">
                <p className="footer-text">
                    &copy; {new Date().getFullYear()} Bariffle Group. All rights reserved.
                </p>
            </div>
        </div>
    );
}
