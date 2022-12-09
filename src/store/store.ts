import { configureStore } from '@reduxjs/toolkit';
import log from 'redux-logger';
import logger from './logger';
import rootReducer from './rootReducer';
const store = configureStore({
    // reducer: logger(rootReducer),
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(log),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
