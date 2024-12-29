import { configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import cartItemCountReducer from './features/cartItemSlice';

export const store = configureStore({
  reducer: {
    cartItemCount: cartItemCountReducer, // Add more slices as needed
  },
});

// Export RootState and AppDispatch for TypeScript support
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
