import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Generica from "../pages/Generica";
import Final from "../pages/Final";
import Dragao from "../pages/Dragao";
import Numeros712 from "../pages/Numeros712";
import NumPares713 from "../pages/NumPares713";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/contato", element: <Contato />},
    {path: "/generica", element: <Generica />},
    {path: "/final", element: <Final />},
    {path: "/dragao", element: <Dragao/>},
    {path: "/numeros712", element: <Numeros712/>},
    {path: "/numpares713", element: <NumPares713 />},

])

export default router;
