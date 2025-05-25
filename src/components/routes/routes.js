import { useRoutes } from "react-router-dom";

import LandingPage from "../pages/LandingPage";


export default function Router (){
    return useRoutes([
        {
            path: '/',
            children: [
                { path: '/', element: <LandingPage /> },

            ]
        },
    ]);
}
