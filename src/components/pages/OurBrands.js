import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/landing-page.css';

import bglogo from "../../assets/logos/barifflelogotrim.jpeg";
import image1 from "../../assets/images/carringtons.jpg";
import image2 from "../../assets/images/Signature-Aerial-_1_.jpg";
import image3 from "../../assets/images/award.jpg";
import image4 from "../../assets/images/brand (1).jpeg"


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
            <h2 className="brand-title">Our Major Brand: Carringtons Rum Cream</h2>
            <hr className="brands-hr" />
            <div className="lp-img-block no-top">
                <div className="lp-img-block-content-wrapper">
                    <p className="lp-text-blue">
                        From a young age, the creator of Carringtons—just 18 at the time—understood the power of hard work and the need 
                        to break generational cycles of poverty. Raised in Carringtons Village, a tight-knit, working-class community 
                        in Barbados, he was taught that entrepreneurship wasn't just an opportunity—it was a responsibility.
                    </p>
                    <p className="lp-text-blue">
                        So when the time came to forge his own path, he didn't hesitate. In December 2020, he founded Carringtons Rum 
                        Cream. But this brand wasn't built just to generate income—it was born to honour his grandfather, a man he was 
                        raised by, and the very person who passed down the original rum cream recipe.
                    </p>
                </div>
                <div className="lp-img-wrapper">
                    <img src={image1} alt="carringtons" className="lp-img" />
                </div>
            </div>
            <div className="lp-img-block lp-reverse-display no-top">
                <div className="lp-img-block-content-wrapper">
                    <p className="lp-text-blue right-align">
                        From those humble roots came a brand that has rapidly become a fixture in Barbados' beverage scene. With just 
                        two original SKUs—Original and Coconut—Carringtons has carved out shelf space in some of the island's most 
                        respected retailers and hospitality venues:
                    </p>
                    <p className="lp-text-blue right-align">
                        Massy Stores, Popular Supermarkets, and Wine World
                    </p>
                    <p className="lp-text-blue right-align">
                        Western Wholesale, Rum & Company, and a dedicated airport kiosk in Grantley Adams International
                    </p>
                    <p className="lp-text-blue right-align">
                        Luxury hotels like the Wyndham Grand and Dover Beach Hotel
                    </p>
                </div>
                <div className="lp-img-wrapper">
                    <img src={image2} alt="Shirley's" className="lp-img" />
                </div>
            </div>
            <div className="lp-img-block no-top">
                <div className="lp-img-block-content-wrapper">
                    <p className="lp-text-blue">
                        The brand's success has not gone unnoticed. In the past year, Carringtons has received:
                    </p>
                    <p className="lp-text-blue">
                        The Bambusa Award for Entrepreneurial Excellence, presented at the National Youth Awards by the Ministry of 
                        Youth, Sports & Community Empowerment
                    </p>
                    <p className="lp-text-blue">
                        The National Youth Award for Entrepreneurship, awarded by the Barbados Labour Party, the country's current 
                        governing party
                    </p>
                    <p className="lp-text-blue">
                        These honors reflect more than just quality—they represent the cultural and economic value Carringtons brings 
                        to the island.
                    </p>
                </div>
                <div className="lp-img-wrapper">
                    <img src={image3} alt="carringtons" className="lp-img" />
                </div>
            </div>
            <div className="brands-text-wrapper">
                <p className="brands-text">
                    Now partnered with Bariffle Group, the brand is expanding into restaurants, bars, and export markets, evolving 
                    from a passion project into a Caribbean brand in the making—one that celebrates legacy, uplifts community, and 
                    brings authentic Barbadian flavor to the world.
                </p>
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
                    <img src={image4} alt="Shirley's" className="lp-img" />
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
