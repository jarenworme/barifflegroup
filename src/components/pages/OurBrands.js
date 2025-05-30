import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/landing-page.css';

import bglogo from "../../assets/logos/barifflelogotrim.jpeg";
import image1 from "../../assets/images/carringtons.jpg";
import image2 from "../../assets/images/brand (2).jpeg"


export default function OurBrands () {
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
            <div className="brands-block1">
                <h1 className="lp-block1-title">Our Brands</h1>
                <h2 className="lp-block1-subtitle">Explore the companies that trust us to put product to shelf</h2>
            </div>
            <h2 className="brand-title">Carringtons Rum Cream</h2>
            <hr className="brands-hr" />
            <div className="lp-img-block no-top">
                <div className="lp-img-block-content-wrapper">
                    <h3 className="lp-img-block-title">Building on Family Legacy</h3>
                    <p className="lp-text-blue">
                        From a young age, the creator of Carringtons, then 18, was taught the importance of the hard work it takes to 
                        break cyclical poverty. This was especially so having grown up in the lowincome neighbourhood of Carringtons 
                        Village. Naturally, entrepreneurship formed part of this teaching. 
                    </p>
                    <p className="lp-text-blue">
                        Thus, when he was of the age to properly 
                        pursue the avenues of entrepreneurship, he decided to develop the brand Carringtons in December 2020. However, 
                        not only was this a means of earning a living, but it was equally a means of honoring his grandfather with 
                        whom he grew up and from whom this recipe came.
                    </p>
                </div>
                <div className="lp-img-wrapper">
                    <img src={image1} alt="carringtons" className="lp-img" />
                </div>
            </div>
            <h2 className="brand-title">Shirley's Blend</h2>
            <hr className="brands-hr" />
            <div className="lp-img-block lp-reverse-display no-top">
                <div className="lp-img-block-content-wrapper">
                    <h3 className="lp-img-block-title right-align">A Taste of Tradition. A Kick of Heat.</h3>
                    <p className="lp-text-blue right-align">
                        Shirley's Blend is a bold, homegrown hot seasoning rooted in Barbadian family tradition. Passed down through 
                        generations, the recipe delivers rich, spicy flavor perfect for chicken, pork, fish—or any dish that needs an 
                        island kick. Made locally in small batches, Shirley's Blend has quietly built a loyal following, sold in 
                        select corner shops and one major supermarket in Barbados. As we grow, we aim to take this beloved Bajan 
                        classic from local tables to the Caribbean and beyond.
                    </p>
                </div>
                <div className="lp-img-wrapper">
                    <img src={image2} alt="Shirley's" className="lp-img" />
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
