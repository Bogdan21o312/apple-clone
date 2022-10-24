import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {testAPI} from "../sevices/test";
import {navbarAPI} from "../sevices/NavbarService";

const rootReducer = combineReducers({
    [testAPI.reducerPath]: testAPI.reducer,
    [navbarAPI.reducerPath]: navbarAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,

    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
