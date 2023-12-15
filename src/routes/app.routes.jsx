import { Routes, Route  } from "react-router-dom"; 

import { Home } from '../pages/Home'
import { Product } from '../pages/Product'
import { useAuth } from "../hooks/auth";

import { AuthRoutes } from "./auth.routes";
import { AdminRoutes } from "./admin.routes";

export function AppRoutes(){

    const { user } = useAuth();

    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/products/:id" element={<Product />}/>

        </Routes>
    )

}