import { useRoutes } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import WhatWeDo from "../pages/WhatWeDo";


export default function Router (){
    return useRoutes([
        {
            path: '/',
            children: [
                { path: '/', element: <LandingPage /> },
                { path: '/info', element: <WhatWeDo />}
            ]
        },
    ]);
}
