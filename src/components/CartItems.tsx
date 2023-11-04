import Card from "./ui/Card";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

export default function CartItems() {
	const cartItems = useSelector((state: RootState) => state.cart.cartItems);
	return (
		<>{cartItems?.map((cartItem) => <Card key={cartItem.id} product={cartItem} isCartItem />)}</>
	);
}
