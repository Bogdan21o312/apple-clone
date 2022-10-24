import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {testAPI} from "../sevices/test";
import {navbarAPI} from "../sevices/NavbarService";
import {newsFooterAPI} from "../sevices/NewsFooterService";
import {columnFooterAPI} from "../sevices/ColumnFooterService";
import {bottomFooterAPI} from "../sevices/BottomFooterService";

const rootReducer = combineReducers({
    [testAPI.reducerPath]: testAPI.reducer,
    [navbarAPI.reducerPath]: navbarAPI.reducer,
    [newsFooterAPI.reducerPath]: newsFooterAPI.reducer,
    [columnFooterAPI.reducerPath]: columnFooterAPI.reducer,
    [bottomFooterAPI.reducerPath]: bottomFooterAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,

    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
