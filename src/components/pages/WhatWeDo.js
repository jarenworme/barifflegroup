import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/landing-page.css';

import bglogo from "../../assets/logos/barifflelogotrim.jpeg";
import image1 from "../../assets/images/Barbados-road-trip.jpg";
import image2 from "../../assets/images/boat.jpg"
import image3 from "../../assets/images/cheapsidemarket.jpg"
import image4 from "../../assets/images/carringtons2.jpg"


export default function WhatWeDo () {
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
            <div className="wwd-block1">
                <h1 className="lp-block1-title">Import. Distribute. Grow Healthier.</h1>
                <h2 className="wwd-block1-subtitle">
                    At Bariffle Group, we specialize in the importation and distribution of healthier fast-moving consumer goods 
                    (FMCGs) across the Caribbean. Our mission is to redefine everyday consumption by making better-for-you options 
                    - lower in sugar, salt, and artificial ingredients - widely available and accessible.
                </h2>
            </div>
            <div className="lp-img-block">
                <div className="lp-img-block-content-wrapper">
                    <h3 className="lp-img-block-title">Strategic Sourcing</h3>
                    <p className="lp-text-blue">
                        We partner with trusted suppliers across Latin America who share our vision for wellness and quality. Every 
                        product we bring in aligns with evolving Caribbean tastes while meeting our strict standards for nutritional 
                        value, ingredient transparency, and consistency.
                    </p>
                </div>
                <div className="lp-img-wrapper">
                    <img src={image1} alt="Barbados" className="lp-img" />
                </div>
            </div>
            <div className="lp-img-block lp-reverse-display">
                <div className="lp-img-block-content-wrapper">
                    <h3 className="lp-img-block-title right-align">Logistics & Freight Coordination</h3>
                    <p className="lp-text-blue right-align">
                        We handle the full logistics chain with care—managing every step from manufacturer to port to point of sale. 
                        Our efficient network ensures timely, reliable delivery of healthier goods across the region, regardless of 
                        scale or complexity.
                    </p>
                </div>
                <div className="lp-img-wrapper">
                    <img src={image2} alt="Barbados" className="lp-img" />
                </div>
            </div>
            <div className="lp-img-block">
                <div className="lp-img-block-content-wrapper">
                    <h3 className="lp-img-block-title">Distribution & Retail Placement</h3>
                    <p className="lp-text-blue">
                        We collaborate with supermarkets, wholesalers, and independent retailers to place nutritious products where 
                        they matter most. More than just delivering stock, we help build demand and educate consumers on smarter 
                        choices through targeted placement and market engagement.
                    </p>
                </div>
                <div className="lp-img-wrapper">
                    <img src={image3} alt="Barbados" className="lp-img" />
                </div>
            </div>
            <div className="lp-img-block lp-reverse-display">
                <div className="lp-img-block-content-wrapper">
                    <h3 className="lp-img-block-title right-align">Brand Development</h3>
                    <p className="lp-text-blue right-align">
                        We don't just move boxes—we build brands with purpose. From visual identity to in-store promotion, we help 
                        develop and elevate health-forward brands that resonate with Caribbean consumers. Shirley's Blend Seasoning 
                        is only the beginning.
                    </p>
                </div>
                <div className="lp-img-wrapper">
                    <img src={image4} alt="Barbados" className="lp-img" />
                </div>
            </div>
            <div className="wwd-block3">
                <h2 className="wwd-block3-title">
                    Ready to join the health movement across the Caribbean?
                </h2>
                <p className="wwd-block3-text">
                    Let's talk. We're actively seeking supplier partnerships and retail collaborations with a shared commitment to 
                    wellness, accessibility, and regional growth.
                </p>
            </div>
            <div className="footer">
                <p className="footer-text">
                    &copy; {new Date().getFullYear()} Bariffle Group. All rights reserved.
                </p>
            </div>
        </div>
    );
}
