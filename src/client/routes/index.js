import React from "react";
import ROUTES from "./routes";
import { Route, Routes, useRoutes } from "react-router-dom";

function CustomRoutes() {
    const element = useRoutes(ROUTES)
    return element
    return <Routes>
        {ROUTES.map((obj) => (
            <Route element={obj.element} path={obj.path} exact={obj.exact} />
        ))}
    </Routes>
}

export default CustomRoutes