import { Navigate, Route, Routes } from "react-router-dom";

export const AppRoutes = () =>{
    return(
        <div>
            <Routes>
                <Route path="/pagina-inicial" element={<p>Página Inicial</p>}/>
                <Route path="*" element={<Navigate to="/pagina-inicial"/>}/>
            </Routes>
        </div>
    )
};