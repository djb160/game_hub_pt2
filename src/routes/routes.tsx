import { createBrowserRouter } from 'react-router-dom'
import GameDetailsPage from '../components/GameDetailsPage';
import ErrorPage from '../pages/Errorpage';
import HomePage from '../pages/Homepage';
import Layout from '../pages/Layout';



const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout />,
        errorElement:<ErrorPage />,
        children:[
            { index:true, element:<HomePage /> },
            { path:'games/:slug', element:<GameDetailsPage /> },
        ]
    },
    
]);


export default router;