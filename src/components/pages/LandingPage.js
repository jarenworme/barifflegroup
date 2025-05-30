import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/landing-page.css';

import bglogo from "../../assets/logos/barifflelogotrim.jpeg";
import image1 from "../../assets/images/BRIDGETOWN_barbados-g9afed3245_1920_wide.jpg";
import image2 from "../../assets/images/bathsheba.jpg"
import image3 from "../../assets/images/barbhero_16x9.jpg"
import image4 from "../../assets/images/caribbeanmap.jpg"


export default function LandingPage () {
    // init navigate variable for page navigation
    const navigate = useNavigate();

    // routing functions
    const navigateInfo = () => navigate('/info', { replace: false });
    const navigateLandingPage = () => navigate('/', { replace: false });
    const navigateBrands = () => navigate('/brands', { replace: false });

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
                    <button className="lp-nav-btn" onClick={navigateBrands}>Our Brands</button>
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
                        At Bariffle Group, we believe the Caribbean deserves more than just quality — it deserves better choices. 
                        That's why we're committed to supplying regional retailers, grocers, and wholesalers with access to 
                        exceptional, health-conscious brands. From wholesome food and beverages to healthier alternatives to everyday 
                        products, we make better living more accessible — all backed by seamless, reliable distribution.
                    </p>
                </div>
                <div className="lp-img-wrapper">
                    <img src={image1} alt="Barbados" className="lp-img" />
                </div>
            </div>
            <div className="lp-img-block lp-reverse-display">
                <div className="lp-img-block-content-wrapper">
                    <p className="lp-text-blue right-align">
                        Headquartered in Barbados, our vision is to be the lasting link between Caribbean markets and Latin America's 
                        top producers of nutritious, high-quality goods — driven by our commitment to healthier living and delivered 
                        with signature efficiency, reliability, and care.
                    </p>
                </div>
                <div className="lp-img-wrapper">
                    <img src={image2} alt="Barbados" className="lp-img" />
                </div>
            </div>
            <div className="lp-card-block">
                <div className="lp-cards-wrapper">
                    <div className="lp-card">
                        <h3 className="lp-card-title">Our Vision</h3>
                        <p className="lp-card-text">
                            To become the Caribbean's most trusted bridge between health-focused, world-class products and the growing 
                            demand for better everyday choices.
                        </p>
                    </div>
                    <div className="lp-card">
                        <h3 className="lp-card-title">Our Mission</h3>
                        <p className="lp-card-text">
                            To empower regional retailers, grocers, and wholesalers by giving them access to exceptional international 
                            brands that offer healthier, more nutritious alternatives — supported by seamless and reliable 
                            distribution. 
                        </p>
                    </div>
                </div>
            </div>
            <div className="lp-img-block">
                <div className="lp-img-block-content-wrapper">
                    <p className="lp-text-blue">
                        We are grounded in strong relationships and market intuition and sharp logistics. The team at Bariffle Group 
                        combines experience in and enthusiasm for operations with regional retail understanding, and the result? A 
                        lean, smart distribution company that knows how to get the right products on the right shelves.
                    </p>
                </div>
                <div className="lp-img-wrapper">
                    <img src={image3} alt="Barbados" className="lp-img" />
                </div>
            </div>
            <div className="lp-img-block lp-reverse-display">
                <div className="lp-img-block-content-wrapper">
                    <p className="lp-text-blue right-align">
                        We are committed to forging lasting partnerships across Latin America and the Caribbean. Ready to partner with 
                        a distributor who knows the region and moves with intention? Let's talk. We're open to new supplier 
                        relationships and regional retail collaborations.
                    </p>
                </div>
                <div className="lp-img-wrapper">
                    <img src={image4} alt="Barbados" className="lp-img" />
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
