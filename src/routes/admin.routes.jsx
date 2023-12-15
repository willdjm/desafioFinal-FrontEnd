import { Routes, Route  } from "react-router-dom"; 

import { HomeAdmin } from '../pages/HomeAdmin'
import { ProductAdmin } from '../pages/ProductAdmin'
import { New } from '../pages/New'
import { Edition } from '../pages/Edition'


export function AdminRoutes(){
    return(
        <Routes>
            <Route path="/" element={<HomeAdmin />}/>
            <Route path="/new" element={<New />}/>
            <Route path="/edit/:id" element={<Edition />}/>
            <Route path="/products/:id" element={<ProductAdmin />}/>
        </Routes>
    )

}
