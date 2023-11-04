import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export default function CardCount() {
	const cartItemCount = useSelector((state: RootState) => state.cart.cartItemCount);
	return (
		<section className="bg-indigo-100">
			<span className="text-xl">
				Cart: <span className="font-bold">{cartItemCount || 0}</span>
			</span>
		</section>
	);
}
