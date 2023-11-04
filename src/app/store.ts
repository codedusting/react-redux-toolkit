import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import cartReducer from "./cart/cartSlice";

const store = configureStore({
	reducer: {
		cart: cartReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDisptach = typeof store.dispatch;

export const useAppDispatch: () => AppDisptach = useDispatch;

export default store;
