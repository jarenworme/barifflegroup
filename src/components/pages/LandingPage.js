import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/landing-page.css';

// import block2Headshot from "../../assets/images/headshot2.png";


export default function LandingPage () {
    // init navigate variable for page navigation
    const navigate = useNavigate();

    // routing functions
    const navigateEpisodesFavs = () => navigate('/Episodes/NaomisFavs', { replace: false });


    return (
        <div className="lp-wrapper">
            landing page
        </div>
    );
}
