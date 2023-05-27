import { createBrowserRouter } from 'react-router-dom'
import GameDetailsPage from '../components/GameDetailsPage';
import Homepage from '../pages/Homepage';
import Layout from '../pages/Layout';



const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout />,
        // errorElement:<ErrorPage />,
        children:[
            { index:true, element:<Homepage /> },
            { path:'games/:id', element:<GameDetailsPage /> },
        ]
    },
    
]);


export default router;