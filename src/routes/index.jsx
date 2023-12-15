import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { AdminRoutes } from "./admin.routes";

export function Routes(){

    const { user } = useAuth()


    return(
        <BrowserRouter>
    
            {!user ? (<AuthRoutes/>) : user && user.admin === 1 ? (<AdminRoutes/>) : (<AppRoutes/>)}
                      
        </BrowserRouter>
    )
}

