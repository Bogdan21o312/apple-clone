import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {navbarAPI} from "../sevices/NavbarService";
import {footerAPI} from "../sevices/FooterService";
import {homeAPI} from "../sevices/HomeService";

const rootReducer = combineReducers({
    [navbarAPI.reducerPath]: navbarAPI.reducer,
    [footerAPI.reducerPath]: footerAPI.reducer,
    [homeAPI.reducerPath]: homeAPI.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,

    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
