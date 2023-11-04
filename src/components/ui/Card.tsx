import { addItemToCart, fetchSomeApi, removeItemFromCart } from "../../app/cart/cartSlice";
import { AppDisptach, useAppDispatch } from "../../app/store";
import { ProductProps } from "../../types/products";

export default function Card({
	product,
	isCartItem,
}: {
	product: ProductProps;
	isCartItem?: boolean;
}) {
	const dispatch: AppDisptach = useAppDispatch();
	return (
		<div className="w-80 bg-green-100 px-4 py-4 shadow-md" key={product.id}>
			<div className="h-auto w-full">
				<img
					src={product.image}
					alt={product.name}
					width={320}
					height={180}
					className="object-cover"
				/>
			</div>
			<div className="mt-2 flex flex-col gap-1">
				<h3 className="text-lg font-bold">{product.name}</h3>
				<p className="text-md text-stone-500">{product.description}</p>
			</div>
			<button
				className="my-4 mt-2 w-full bg-stone-800 py-4 font-semibold uppercase tracking-wider text-stone-50 hover:bg-stone-950 focus:bg-stone-950 active:bg-stone-950"
				onClick={() => {
					if (!isCartItem) {
						dispatch(addItemToCart({ product }));
					} else {
						dispatch(removeItemFromCart({ id: product.id }));
					}
				}}
			>
				{isCartItem ? "Remove from cart" : "Add to cart"}
			</button>
			<button
				className="my-4 mt-2 w-full bg-stone-800 py-4 font-semibold uppercase tracking-wider text-stone-50 hover:bg-stone-950 focus:bg-stone-950 active:bg-stone-950"
				onClick={() => {
					dispatch(fetchSomeApi());
				}}
			>
				Fetch Some Api
			</button>
		</div>
	);
}
