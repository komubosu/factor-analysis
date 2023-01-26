import { configureStore } from '@reduxjs/toolkit';
import faCreateSlice from './faCreateSlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    faCreate: faCreateSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
