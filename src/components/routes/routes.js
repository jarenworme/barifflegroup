import { useRoutes } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import WhatWeDo from "../pages/WhatWeDo";
import OurBrands from "../pages/OurBrands";


export default function Router (){
    return useRoutes([
        {
            path: '/',
            children: [
                { path: '/', element: <LandingPage /> },
                { path: '/info', element: <WhatWeDo />},
                { path: 'brands', element: <OurBrands />}
            ]
        },
    ]);
}
