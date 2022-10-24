import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import {
    ACCESSORIES_URL,
    AIR_PODS_URL,
    ERROR_URL,
    HOME_URL,
    IPAD_URL,
    IPHONE_URL,
    MAC_URL, ONLY_ON_APPLE_URL,
    STORE_URL, SUPPORT_URL,
    TV_HOME_URL,
    WATCH_URL
} from "./config";
import Store from "../pages/Store";
import Mac from "../pages/Mac";
import Ipad from "../pages/Ipad";
import Iphone from "../pages/Iphone";
import Watch from "../pages/Watch";
import AirPods from "../pages/AirPods";
import TVHome from "../pages/TV&Home";
import OnlyOnApple from "../pages/OnlyOnApple";
import Accessories from "../pages/Accessories";
import Support from "../pages/Support";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={HOME_URL} element={<Home/>}/>
            <Route path={STORE_URL} element={<Store/>}/>
            <Route path={MAC_URL} element={<Mac/>}/>
            <Route path={IPAD_URL} element={<Ipad/>}/>
            <Route path={IPHONE_URL} element={<Iphone/>}/>
            <Route path={WATCH_URL} element={<Watch/>}/>
            <Route path={AIR_PODS_URL} element={<AirPods/>}/>
            <Route path={TV_HOME_URL} element={<TVHome/>}/>
            <Route path={ONLY_ON_APPLE_URL} element={<OnlyOnApple/>}/>
            <Route path={ACCESSORIES_URL} element={<Accessories/>}/>
            <Route path={SUPPORT_URL} element={<Support/>}/>
            <Route path={ERROR_URL} element={<Error/>}/>
            <Route
                path="*"
                element={<Navigate to={ERROR_URL} replace/>}
            />
        </Routes>
    );
};

export default AppRouter;