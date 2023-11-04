import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductProps, ProductStateProps } from "../../types/products";

const initialState: ProductStateProps = {
	cartItems: [],
	cartItemCount: 0,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItemToCart: (state, action: PayloadAction<{ product: ProductProps }>) => {
			state.cartItems?.push(action.payload.product);
			state.cartItemCount = (state.cartItemCount || 0) + 1;
		},
		removeItemFromCart: (state, action: PayloadAction<{ id: ProductProps["id"] }>) => {
			state.cartItems = state.cartItems?.filter((product) => product.id !== action.payload.id);
			state.cartItemCount = (state.cartItemCount || 0) - 1;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchSomeApi.pending, () => {
				console.info("Request is pending...");
			})
			.addCase(fetchSomeApi.rejected, () => {
				console.error("Request failed...");
			})
			.addCase(fetchSomeApi.fulfilled, () => {
				console.log("Request success...");
			});
	},
});

export const fetchSomeApi = createAsyncThunk("cart/fetchSomeApiRequest", async () => {
	await new Promise((resolve, reject) => {
		if (Math.floor(Math.random() * 10) + 1 > 5) {
			setTimeout(reject, 3000);
		} else {
			setTimeout(resolve, 3000);
		}
	});
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
